'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithSkeletonProps extends ImageProps {
  skeletonClassName?: string;
}

export default function ImageWithSkeleton({
  skeletonClassName = '',
  className = '',
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${skeletonClassName}`}
        />
      )}
      <Image
        {...props}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
      />
    </div>
  );
}
