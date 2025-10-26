'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import PortfolioSection from './PortfolioSection';
import { Document, Page, pdfjs } from 'react-pdf';
import { PageCallback } from 'react-pdf/dist/shared/types.js';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';


type Props = {
  title: string;
  pdfSrc: string; // URL or /public path
  className?: string;
  maxWidth?: string; // Tailwind container class, e.g., "max-w-6xl"
  viewerHeight?: number; // Outer viewport height hint (px)
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
};

export default function PortfolioPdfViewerSection({
  title,
  pdfSrc,
  className,
  viewerHeight = 640,
  titleSize
}: Props) {

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number | null>(null);
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

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  }, []);

  // Observe container width/height
  useEffect(() => {
    const currentElement = containerRef.current;
    if (!currentElement) return;
    currentElement.style.height = `${viewerHeight}px`;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({
          width: Math.floor(width),
          height: Math.floor(height),
        });
      }
    });
    resizeObserver.observe(currentElement);
    return () => resizeObserver.disconnect();
  }, [viewerHeight]);

  const onDocLoad = useCallback((pdf: { numPages: number }) => {
    setPageCount(pdf.numPages);
    setPage(1); // start at first page
    setError(null);
  }, []);

  const onPageLoad = useCallback((page: PageCallback) => {
    setPageDims({ width: page.originalWidth, height: page.originalHeight });
  }, []);

  const onDocError = useCallback((e: Error) => {
    setError(e.message || 'Failed to load PDF.');
  }, []);


  const goNext = useCallback(() => {
    setPage((p) => {
      const next = p + 1;
      return Math.min(next,);
    });
  }, []);

  const goPrev = useCallback(() => {
    setPage((p) => {
      const prev = p - 1;
      return Math.max(1, prev);
    });
  }, []);

  const isPrevDisabled = page <= 1;
  const isNextDisabled = pageCount !== null ? page >= pageCount : false;

  // Compute scale from measured size (best-fit: height & width)
  const scale = useMemo(() => {
    if (!pageDims) return 1;
    const { width: cw, height: ch } = containerSize;
    if (cw <= 0 || ch <= 0) return 1;
    const pagesWide = 1;
    const innerPadY = 4; // small safety to avoid sub-pixel overflow
    const innerPadX = 0; // keep zero to preserve "no gutter"
    const heightScale = (ch - innerPadY) / pageDims.height;
    const widthScale = (cw - innerPadX) / (pageDims.width * pagesWide);
    return Math.max(0.1, Math.min(heightScale, widthScale) * 0.98);
  }, [containerSize, pageDims]);


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

      <PortfolioSection title={title} titleSize={titleSize}>
        <div
          ref={containerRef}
          className="relative w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          <div
            className="h-full w-full overflow-auto select-none"
            style={{ fontSize: 0, touchAction: 'pan-y' }}
          >
            {error ? (
              <div className="grid h-full w-full place-items-center">
                <span className="text-sm text-red-600">{error}</span>
              </div>
            ) : (
              // Center vertically & horizontally
              <div className="flex h-full w-full items-center justify-center p-0">
                <Document
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

                  <Page
                    key={`page-${page}`}
                    pageNumber={page}
                    scale={scale}
                    onLoadSuccess={onPageLoad}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    className="!m-0 inline-block align-top"
                  />
                </Document>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goPrev}
            onMouseDown={(e) => e.preventDefault()}
            disabled={isPrevDisabled}
            className={clsx(
              'inline-block bg-[#409EB6] text-white px-4 py-2 tracking-wider transition-colors duration-200 rounded-lg',
              isPrevDisabled
                ? 'cursor-not-allowed opacity-40'
                : 'hover:brightness-125 hover:cursor-pointer'
            )}
            aria-label="Previous pages"
          >
            Prev
          </button>

          <span className="tabular-nums text-md text-body">
            {(() => {
              return `Page ${page}`;
            })()}
          </span>

          <button
            type="button"
            onClick={goNext}
            onMouseDown={(e) => e.preventDefault()}
            disabled={isNextDisabled}
            className={clsx(
              'inline-block bg-[#409EB6] text-white px-4 py-2 tracking-wider transition-colors duration-200 rounded-lg',
              isNextDisabled
                ? 'cursor-not-allowed opacity-40'
                : 'hover:brightness-125 hover:cursor-pointer'
            )}
            aria-label="Next pages"
          >
            Next
          </button>
        </div>
      </PortfolioSection>
    </section>
  );
}
