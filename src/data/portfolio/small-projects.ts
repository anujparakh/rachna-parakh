import { PortfolioProjectData } from '@/components/portfolio/types';
import KitePosterImage from '@img/projects/small-project/kite-poster.png';
import KiteMockupImage from '@img/projects/small-project/kite-mockup.png';
import SugarPosterImage from '@img/projects/small-project/sugar-poster.svg';
import SugarMockupImage from '@img/projects/small-project/sugar-mockup.png';
import DunePosterImage from '@img/projects/small-project/dune-poster.png';
import DuneMockupImage from '@img/projects/small-project/dune-mockup.png';
import MojoAssets from '@img/projects/small-project/mojo-assets.svg';
import MojoMockupImage from '@img/projects/small-project/mojo-mockup.png';
import InsanitationPngImage from '@img/projects/small-project/Insanitation.png';
import InsanitationComputerMockupImage from '@img/projects/small-project/insanitation-mockup-monitor.jpeg';

export const smallProjectsData: PortfolioProjectData = {
  hero: {
    title: 'Additional Projects',
    subtitle: 'A collection of graphic design projects',
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
            modalHeight: 'h-[85vh]',
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Mojo Rebranding Mockup',
            data: MojoMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: '!w-auto h-[50vh] bg-white',
        titleSize: 'text-3xl',
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
            modalHeight: 'h-[85vh]',
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Sugar Infographic Mockup',
            data: SugarMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: '!w-auto h-[60vh]',
        titleSize: 'text-3xl',
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
        imageClass: '!w-auto h-[60vh]',
        titleSize: 'text-3xl',
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
        imageClass: '!w-auto h-[65vh]',
        titleSize: 'text-3xl',
      },
    },
    {
      id: 'group-project',
      title: 'Group Client Project - Rebranding',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Insanitation Logo',
            data: InsanitationPngImage,
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Insanitation Logo Mockup',
            data: InsanitationComputerMockupImage,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: '!w-auto h-[50vh]',
        titleSize: 'text-3xl',
      },
    },
  ],
};
