import PortfolioImage from './PortfolioImage';
import { ImageData } from './types';

interface PortfolioHeroProps {
  image: ImageData;
  title: string;
  subtitle: string;
  imageClass?: string;
}

export default function PortfolioHero({
  image,
  title,
  subtitle,
  imageClass,
}: PortfolioHeroProps) {
  return (
    <>
      {/* Hero Image */}
      <div className="mb-12">
        <PortfolioImage image={image} height="h-96" className={imageClass} />
      </div>

      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      </div>
    </>
  );
}
