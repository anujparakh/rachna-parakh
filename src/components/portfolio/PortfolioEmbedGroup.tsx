import PortfolioSection from './PortfolioSection';
import { EmbedSubSection } from './types';

interface PortfolioEmbedGroupProps {
  title: string;
  subSections: EmbedSubSection[];
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  className?: string;
}

function PhoneFrame({ src }: { src: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '36px',
          padding: '16px 12px 20px',
          width: '100%',
          maxWidth: '360px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.07)',
        }}
      >
        {/* Left volume buttons */}
        <div style={{ position: 'absolute', left: '-3px', top: '72px', width: '3px', height: '28px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: '-3px', top: '110px', width: '3px', height: '28px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
        {/* Right power button */}
        <div style={{ position: 'absolute', right: '-3px', top: '96px', width: '3px', height: '40px', background: '#2a2a2a', borderRadius: '0 2px 2px 0' }} />
        {/* Notch */}
        <div style={{ width: '60px', height: '10px', background: '#1a1a1a', borderRadius: '0 0 10px 10px', margin: '0 auto 8px', position: 'relative', zIndex: 1 }} />
        {/* Screen */}
        <iframe
          src={src}
          allowFullScreen
          style={{ display: 'block', width: '100%', height: '70vh', borderRadius: '18px', border: 'none' }}
        />
        {/* Home indicator */}
        <div style={{ width: '60px', height: '4px', background: '#444', borderRadius: '2px', margin: '10px auto 0' }} />
      </div>
    </div>
  );
}

export default function PortfolioEmbedGroup({
  title,
  subSections,
  titleSize,
  className,
}: PortfolioEmbedGroupProps) {
  return (
    <PortfolioSection title={title} titleSize={titleSize} className={className}>
      <div className="space-y-12">
        {subSections.map((sub) => (
          <div key={sub.title}>
            <h4 className="text-xl font-medium text-foreground mb-4 text-center">
              {sub.title}
            </h4>
            {sub.phoneFrame ? (
              <PhoneFrame src={sub.figmaSrc} />
            ) : (
              <iframe
                className={`rounded-lg ${sub.imageClass ?? 'w-full h-[80vh]'}`}
                src={sub.figmaSrc}
                allowFullScreen
              />
            )}
            {sub.description && (
              <p className="text-center text-sm text-foreground/60 mt-3">
                {sub.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </PortfolioSection>
  );
}
