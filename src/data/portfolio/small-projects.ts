import { PortfolioProjectData } from '@/components/portfolio/types';
import KitePosterImage from '@img/projects/small-project/kite-poster.png';
import KiteMockupImage from '@img/projects/small-project/kite-mockup.png';
import SugarPosterImage from '@img/projects/small-project/sugar-poster.svg';
import SugarMockupImage from '@img/projects/small-project/sugar-mockup.png';
import DunePosterImage from '@img/projects/small-project/dune-poster.png';
import DuneMockupImage from '@img/projects/small-project/dune-mockup.png';
import MojoAssets from '@img/projects/small-project/mojo-assets.svg';
import MojoMockupImage from '@img/projects/small-project/mojo-mockup.png';

export const smallProjectsData: PortfolioProjectData = {
  hero: {
    title: 'Small Projects',
    subtitle: 'A collection of compact explorations and quick studies',
  },
  sections: [
    {
      id: 'rebranding',
      title: 'Rebranding',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Mojo Rebranding Assets',
            data: MojoAssets,
            modalHeight: '[85vh]',
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Mojo Rebranding Mockup',
            data: MojoMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: 'w-auto h-[45vh]',
      },
    },
    {
      id: 'infographic',
      title: 'Infographic',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Sugar Infographic Poster',
            data: SugarPosterImage,
            modalHeight: '[85vh]',
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Sugar Infographic Mockup',
            data: SugarMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: 'w-auto h-[60vh]',
      },
    },
    {
      id: 'kite-festival-poster',
      title: 'Kite Festival Poster',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Kite Festival Poster',
            data: KitePosterImage,
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Kite Festival Mockup',
            data: KiteMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: 'w-auto h-[55vh]',
      },
    },
    {
      id: 'movie-poster',
      title: 'Movie Poster',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Dune Movie Poster',
            data: DunePosterImage,
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Dune Movie Poster Mockup',
            data: DuneMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: 'w-auto h-[60vh]',
      },
    },
  ],
};
