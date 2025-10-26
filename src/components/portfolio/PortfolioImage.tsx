import { ASSET_PREFIX } from '@/utils/constants';
import { ImageData } from './types';
import Image from 'next/image';
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
  const divProps = !image.scrollable ? 'overflow-hidden hover:scale-102 transition-transform duration-300' : 'overflow-auto h-[80vh]'

  const nextImageComponent = image.data && (
    <Image src={image.data} alt={image.alt} className={`w-full ${height} object-cover ${className}`} />
  );

  const fallbackImageComponent = (
    <img src={ASSET_PREFIX + image.src} alt={image.alt} className={`w-full ${height} object-cover ${className}`} />
  );

  return (
    <div
      className={`shadow-lg border border-gray-200 rounded-lg ${divProps}`}
    >
      {image.data ? nextImageComponent : fallbackImageComponent}
    </div>
  );
}
