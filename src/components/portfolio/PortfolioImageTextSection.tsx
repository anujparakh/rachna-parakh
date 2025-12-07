import PortfolioImage from './PortfolioImage';
import PortfolioSection from './PortfolioSection';
import { ImageData } from './types';

interface PortfolioImageTextSectionProps {
  title: string;
  image: ImageData;
  paragraphs: string[];
  layout?: 'image-left' | 'image-right';
  imageHeight?: 'h-56' | 'h-60' | 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  imageClass?: string;
  className?: string;
}

export default function PortfolioImageTextSection({
  title,
  image,
  paragraphs,
  layout = 'image-left',
  imageHeight = 'h-64',
  titleSize,
  imageClass,
  className,
}: PortfolioImageTextSectionProps) {
  const imageElement = (
    <PortfolioImage image={image} height={imageHeight} className={imageClass} />
  );

  const textElement = (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-muted-foreground ${index < paragraphs.length - 1 ? 'mb-4' : ''}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <PortfolioSection title={title} titleSize={titleSize}>
      <div className={`grid md:grid-cols-2 gap-8 items-center ${className}`}>
        {layout === 'image-left' ? (
          <>
            {imageElement}
            {textElement}
          </>
        ) : (
          <>
            {textElement}
            {imageElement}
          </>
        )}
      </div>
    </PortfolioSection>
  );
}
