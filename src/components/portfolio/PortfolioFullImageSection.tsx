import PortfolioImage from './PortfolioImage';
import PortfolioSection from './PortfolioSection';
import { ImageData } from './types';

interface PortfolioFullImageSectionProps {
  title: string;
  image: ImageData;
  imageHeight?: 'h-56' | 'h-60' | 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  imageClass?: string;
  className?: string;
}

export default function PortfolioFullImageSection({
  title,
  image,
  imageHeight = 'h-128',
  titleSize,
  imageClass,
  className,
}: PortfolioFullImageSectionProps) {
  return (
    <PortfolioSection title={title} titleSize={titleSize}>
      <div className={`mb-6 ${className}`}>
        <PortfolioImage
          image={image}
          height={imageHeight}
          className={imageClass}
        />
      </div>
    </PortfolioSection>
  );
}
