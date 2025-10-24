import { ASSET_PREFIX } from '@/utils/constants';
import { ImageData } from './types';

interface PortfolioImageProps {
  image: ImageData;
  className?: string;
  height?: 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
}

export default function PortfolioImage({
  image,
  className = '',
  height = 'h-64',
}: PortfolioImageProps) {
  return (
    <div
      className={`shadow-lg border border-gray-200 rounded-lg overflow-hidden hover:scale-102 transition-transform duration-300`}
    >
      <img
        src={ASSET_PREFIX + image.src}
        alt={image.alt}
        className={`w-full ${height} object-cover ${className}`}
      />
    </div>
  );
}
