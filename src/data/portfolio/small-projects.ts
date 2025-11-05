import { PortfolioProjectData } from '@/components/portfolio/types';
import InfographicImage from '@img/projects/small-project/infographic-poster.png';
import InfographicMockupImage from '@img/projects/small-project/infographic-mockup.png';
import KitePosterImage from '@img/projects/small-project/kite-poster.png';
import KitePosterMockupImage from '@img/projects/small-project/kite-poster-mockup.png';
import MoviePosterImage from '@img/projects/small-project/movie-poster.png';
import MoviePosterMockupImage from '@img/projects/small-project/movie-poster-mockup.png';
import LogoImage from '@img/projects/small-project/Logo-mojojo.svg';
import LogoMockupImage from '@img/projects/small-project/logo-mockup.png';

export const smallProjectsData: PortfolioProjectData = {
  hero: {
    title: 'Small Projects',
    subtitle: 'A collection of compact explorations and quick studies',
  },
  sections: [
    {
      id: 'sp-1',
      title: 'Infographic',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/small-project/infographic-poster.png',
            alt: 'Infographic poster design showing visualized data and layout exploration',
            data: InfographicImage,
          },
          {
            src: '/projects/small-project/infographic-mockup.png',
            alt: 'Infographic poster mockup displayed in a real-world context',
            data: InfographicMockupImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
    {
      id: 'sp-2',
      title: 'Poster',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/small-project/kite-poster.png',
            alt: 'Kite poster design featuring bold typography and color composition',
            data: KitePosterImage,
          },
          {
            src: '/projects/small-project/kite-poster-mockup.png',
            alt: 'Kite poster mockup showing the design on a wall display',
            data: KitePosterMockupImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
    {
      id: 'sp-3',
      title: 'Movie Poster',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/small-project/movie-poster.png',
            alt: 'Movie poster artwork showcasing dramatic composition and visual tone',
            data: MoviePosterImage,
          },
          {
            src: '/projects/small-project/movie-poster-mockup.png',
            alt: 'Movie poster mockup presented in a cinematic promotional setting',
            data: MoviePosterMockupImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
    {
      id: 'sp-4',
      title: 'Logo',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/small-project/Logo-mojojo.svg',
            alt: 'Logo design for Mojojo showcasing clean, minimalist geometry',
            data: LogoImage,
          },
          {
            src: '/projects/small-project/logo-mockup.png',
            alt: 'Logo mockup demonstrating real-world application on branded material',
            data: LogoMockupImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
  ],
};
