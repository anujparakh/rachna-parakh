import PortfolioImage from './PortfolioImage';
import PortfolioSection from './PortfolioSection';
import { ImageData } from './types';

interface PortfolioImageSidebarSectionProps {
  title: string;
  image: ImageData;
  sidebarContent: string;
  imageColumns?: 2 | 3;
  imageHeight?: 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
}

export default function PortfolioImageSidebarSection({
  title,
  image,
  sidebarContent,
  imageColumns = 3,
  imageHeight = 'h-64',
  titleSize,
}: PortfolioImageSidebarSectionProps) {
  const sidebarColumns = 4 - imageColumns;

  return (
    <PortfolioSection title={title} titleSize={titleSize}>
      <div className="grid grid-cols-6 gap-10 items-center">
        <div className={`col-span-4`}>
          <PortfolioImage image={image} height={imageHeight} />
        </div>
        <div className={`col-span-2`}>
          <p className="text-muted-foreground text-md">{sidebarContent}</p>
        </div>
      </div>
    </PortfolioSection>
  );
}
