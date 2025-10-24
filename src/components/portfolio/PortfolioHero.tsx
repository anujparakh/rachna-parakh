import PortfolioImage from './PortfolioImage';
import { ImageData } from './types';

interface PortfolioHeroProps {
  image: ImageData;
  title: string;
  subtitle: string;
}

export default function PortfolioHero({
  image,
  title,
  subtitle,
}: PortfolioHeroProps) {
  return (
    <>
      {/* Hero Image */}
      <div className="mb-12">
        <PortfolioImage image={image} height="h-96" />
      </div>

      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      </div>
    </>
  );
}
