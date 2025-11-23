'use client';

import { ASSET_PREFIX } from '@/utils/constants';
import { ImageData } from './types';
import ImageWithSkeleton from '../ImageWithSkeleton';
import { useState, useEffect } from 'react';

interface PortfolioImageProps {
  image: ImageData;
  className?: string;
  height?: 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
  enableModal?: boolean;
}

export default function PortfolioImage({
  image,
  className = '',
  height = 'h-64',
}: PortfolioImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalHeight = image.modalHeight || 'h-auto';
  const enableModal = modalHeight !== 'none';

  const divProps = !image.scrollable
    ? 'overflow-hidden hover:scale-102 transition-transform duration-300'
    : 'overflow-auto h-[80vh]';

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleImageClick = () => {
    if (enableModal) {
      setIsModalOpen(true);
      setIsLoading(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  const nextImageComponent = image.data && (
    <ImageWithSkeleton
      src={image.data}
      alt={image.alt}
      className={`w-full ${height} object-cover ${className}`}
    />
  );

  const fallbackImageComponent = (
    <img
      src={ASSET_PREFIX + image.src}
      alt={image.alt}
      className={`w-full ${height} object-cover ${className}`}
    />
  );

  return (
    <>
      <div>
        <div
          className={`shadow-lg border border-gray-200 rounded-lg ${divProps} ${
            enableModal ? 'cursor-pointer' : ''
          } ${image.centered && 'w-fit mx-auto'}`}
          onClick={handleImageClick}
        >
          {image.data ? nextImageComponent : fallbackImageComponent}
        </div>
        {image.subtitle && (
          <p className="mt-4 text-center text-md text-gray-700">
            {image.subtitle}
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handleBackdropClick}
        >
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Image container with proper sizing */}
          <div className="relative flex items-center justify-center max-w-[90vw] max-h-[90vh] p-4">
            {image.data ? (
              <ImageWithSkeleton
                src={image.data}
                alt={image.alt}
                className={`max-w-[85vw] max-h-[85vh] object-contain w-auto bg-white ${image.modalHeight}`}
                onLoad={handleImageLoad}
              />
            ) : (
              <img
                src={ASSET_PREFIX + image.src}
                alt={image.alt}
                className="max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          {/* Close button */}
          <button
            onClick={handleModalClose}
            className="fixed top-2 right-2 bg-transparent text-white p-4 rounded-lg hover:text-primary hover:cursor-pointer transition-colors text-2xl"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
