import PortfolioImage from './PortfolioImage';
import PortfolioSection from './PortfolioSection';
import { ImageData } from './types';

interface PortfolioImageGridSectionProps {
  title: string;
  images: ImageData[];
  gridColumns?: 1 | 2 | 3 | 4;
  imageHeight?: 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  text?: string;
  textPosition?: 'above' | 'below';
  imageClass?: string;
  gridClass?: string;
}

export default function PortfolioImageGridSection({
  title,
  images,
  gridColumns = 3,
  imageHeight = 'h-64',
  titleSize,
  text,
  textPosition = 'below',
  gridClass,
  imageClass,
}: PortfolioImageGridSectionProps) {
  const getGridClasses = () => {
    switch (gridColumns) {
      case 1:
        return 'grid gap-6';
      case 2:
        return 'grid md:grid-cols-2 gap-6';
      case 3:
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 4:
        return 'grid md:grid-cols-2 lg:grid-cols-4 gap-6';
      default:
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  const gridElement = (
    <div className={`${getGridClasses()} ${gridClass ?? ''}`}>
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          {image.title && (
            <p className="mb-2 text-sm font-semibold text-gray-800 text-center">
              {image.title}
            </p>
          )}
          <PortfolioImage
            image={image}
            height={imageHeight}
            className={imageClass}
          />
        </div>
      ))}
    </div>
  );

  const textElement = text ? (
    <div className="max-w-3xl mx-auto my-8">
      <p className="text-muted-foreground text-center text-black ">{text}</p>
    </div>
  ) : null;

  return (
    <PortfolioSection title={title} titleSize={titleSize}>
      {text && textPosition === 'above' && textElement}
      {gridElement}
      {text && textPosition === 'below' && textElement}
    </PortfolioSection>
  );
}
