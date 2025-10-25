'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

type Props = {
  title: string;
  pdfSrc: string; // URL or /public path
  className?: string;
  maxWidth?: string; // Tailwind container class, e.g., "max-w-6xl"
  viewerHeight?: number; // Outer viewport height hint (px)
};

export default function PortfolioPDFViewerSection({
  title,
  pdfSrc,
  className,
  maxWidth = 'max-w-6xl',
  viewerHeight = 640,
}: Props) {
  const [pdfLib, setPdfLib] = useState<null | {
    Document: any;
    Page: any;
    pdfjs: any;
  }>(null);

  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pageDims, setPageDims] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // Load react-pdf client-side
  useEffect(() => {
    let mounted = true;
    (async () => {
      const mod: any = await import('react-pdf');
      mod.pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      if (mounted)
        setPdfLib({ Document: mod.Document, Page: mod.Page, pdfjs: mod.pdfjs });
    })().catch((e) =>
      setError(e?.message ?? 'Failed to initialize PDF viewer.')
    );
    return () => {
      mounted = false;
    };
  }, []);

  // Observe container width/height
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.height = `${viewerHeight}px`;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({
          width: Math.floor(width),
          height: Math.floor(height),
        });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [viewerHeight]);

  const onDocLoad = useCallback((pdf: { numPages: number }) => {
    setNumPages(pdf.numPages);
    setPage(1);
    setError(null);
  }, []);

  const onPageLoad = useCallback((p: any) => {
    setPageDims({ width: p.originalWidth, height: p.originalHeight });
  }, []);

  const onDocError = useCallback((e: Error) => {
    setError(e.message || 'Failed to load PDF.');
  }, []);

  const pagesToShow = useMemo(() => {
    if (!numPages) return [page];
    if (page === 1) return [1];
    const right = Math.min(page + 1, numPages);
    return [page, right];
  }, [page, numPages]);

  const goNext = useCallback(() => {
    setPage((p) => {
      if (!numPages) return p;
      if (p === 1) return numPages >= 2 ? 2 : 1;
      const next = p + 2;
      const lastSpreadStart = Math.max(2, numPages - 1);
      return Math.min(next, lastSpreadStart);
    });
  }, [numPages]);

  const goPrev = useCallback(() => {
    setPage((p) => (p <= 2 ? 1 : Math.max(1, p - 2)));
  }, []);

  const isPrevDisabled = page <= 1;
  const isNextDisabled = useMemo(() => {
    if (!numPages) return false;
    if (page === 1) return numPages <= 1;
    return page + 1 >= numPages;
  }, [page, numPages]);

  const isSpread = useMemo(
    () => numPages !== null && page > 1 && page + 1 <= (numPages ?? 0),
    [page, numPages]
  );

  // Compute scale from measured size (best-fit: height & width)
  const scale = useMemo(() => {
    if (!pageDims) return 1;
    const { width: cw, height: ch } = containerSize;
    if (cw <= 0 || ch <= 0) return 1;
    const pagesWide = isSpread ? 2 : 1;
    const innerPadY = 4; // small safety to avoid sub-pixel overflow
    const innerPadX = 0; // keep zero to preserve "no gutter"
    const heightScale = (ch - innerPadY) / pageDims.height;
    const widthScale = (cw - innerPadX) / (pageDims.width * pagesWide);
    return Math.max(0.1, Math.min(heightScale, widthScale) * 0.98);
  }, [containerSize, pageDims, isSpread]);

  // ---------------- Swipe (Pointer) handling ----------------
  const swipeState = useRef<{
    id: number | null;
    startX: number;
    startY: number;
    active: boolean;
  }>({ id: null, startX: 0, startY: 0, active: false });

  // Tunables (relaxed to improve detection)
  const SWIPE_THRESHOLD = 25; // px horizontal distance to trigger
  const MAX_ANGLE_DEG = 45; // accept up to 45° off horizontal

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // only primary pointer (mouse left / single touch)
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    swipeState.current = {
      id: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      active: true,
    };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const endSwipe = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!swipeState.current.active) return;
      const { id, startX, startY } = swipeState.current;
      swipeState.current.active = false;

      try {
        if (id != null)
          (e.currentTarget as HTMLElement).releasePointerCapture?.(id);
      } catch {
        // ignore if already released
      }

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      if (absDx < SWIPE_THRESHOLD) return;

      const angleDeg = Math.atan2(absDy, absDx) * (180 / Math.PI);
      if (angleDeg > MAX_ANGLE_DEG) return;

      if (dx < 0 && !isNextDisabled) {
        goNext();
      } else if (dx > 0 && !isPrevDisabled) {
        goPrev();
      }
    },
    [goNext, goPrev, isPrevDisabled, isNextDisabled]
  );

  const onPointerUp = endSwipe;
  const onPointerCancel = useCallback(() => {
    swipeState.current.active = false;
  }, []);
  const onPointerLeave = useCallback(() => {
    swipeState.current.active = false;
  }, []);

  // Avoid image/element drag interfering with swipe
  const onDragStart = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !isNextDisabled) goNext();
      else if (e.key === 'ArrowLeft' && !isPrevDisabled) goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, isPrevDisabled, isNextDisabled]);

  return (
    <section className={clsx('w-full', className)}>
      {/* Remove react-pdf default margins */}
      <style jsx global>{`
        .react-pdf__Page {
          margin: 0 !important;
          display: inline-block !important;
          vertical-align: top;
        }
        .react-pdf__Page canvas {
          display: block;
        }
      `}</style>

      <div className={clsx('mx-auto w-full', maxWidth)}>
        <header className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
        </header>

        <div
          ref={containerRef}
          className="relative w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          {/* Put touch-action on the SAME element that has pointer handlers */}
          <div
            className="h-full w-full overflow-auto select-none"
            style={{ fontSize: 0, touchAction: 'pan-y' }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onPointerLeave={onPointerLeave}
            onDragStart={onDragStart}
          >
            {!pdfLib ? (
              <div className="grid h-full w-full place-items-center">
                <span className="text-sm text-gray-500">
                  Loading PDF viewer…
                </span>
              </div>
            ) : error ? (
              <div className="grid h-full w-full place-items-center">
                <span className="text-sm text-red-600">{error}</span>
              </div>
            ) : (
              // Center vertically & horizontally
              <div className="flex h-full w-full items-center justify-center p-0">
                <pdfLib.Document
                  file={pdfSrc}
                  onLoadSuccess={onDocLoad}
                  onLoadError={onDocError}
                  loading={
                    <span className="text-sm text-gray-500">Loading PDF…</span>
                  }
                  error={
                    <span className="text-sm text-red-600">
                      Could not render this PDF.
                    </span>
                  }
                  className="inline-flex items-center justify-center"
                >
                  {pagesToShow.map((p) => (
                    <pdfLib.Page
                      key={p}
                      pageNumber={p}
                      scale={scale}
                      onLoadSuccess={onPageLoad}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      className="!m-0 inline-block align-top"
                    />
                  ))}
                </pdfLib.Document>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            onMouseDown={(e) => e.preventDefault()}
            disabled={isPrevDisabled}
            className={clsx(
              'rounded-lg px-3 py-1 ring-1 ring-gray-300',
              isPrevDisabled
                ? 'cursor-not-allowed opacity-40'
                : 'hover:bg-gray-50'
            )}
            aria-label="Previous pages"
          >
            Prev
          </button>

          <span className="tabular-nums text-sm text-gray-700">
            {(() => {
              if (!numPages) return page.toString();
              return pagesToShow.length === 1
                ? `${pagesToShow[0]}`
                : `${pagesToShow[0]}–${pagesToShow[1]}`;
            })()}
            {typeof numPages === 'number' ? ` / ${numPages}` : ''}
          </span>

          <button
            type="button"
            onClick={goNext}
            onMouseDown={(e) => e.preventDefault()}
            disabled={isNextDisabled}
            className={clsx(
              'rounded-lg px-3 py-1 ring-1 ring-gray-300',
              isNextDisabled
                ? 'cursor-not-allowed opacity-40'
                : 'hover:bg-gray-50'
            )}
            aria-label="Next pages"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
