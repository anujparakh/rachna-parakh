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
      id: 'sp-all',
      title: 'Selected Works',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/small-project/infographic-poster.png',
            alt: 'Infographic poster design showing visualized data and layout exploration',
            title: 'Infographic',
            data: InfographicImage,
          },
          {
            src: '/projects/small-project/kite-poster.png',
            alt: 'Kite poster design featuring bold typography and color composition',
            title: 'Poster',
            data: KitePosterImage,
          },
          {
            src: '/projects/small-project/movie-poster.png',
            alt: 'Movie poster artwork showcasing dramatic composition and visual tone',
            title: 'Movie Poster',
            data: MoviePosterImage,
          },
          {
            src: '/projects/small-project/Logo-mojojo.svg',
            alt: 'Logo design for Mojojo showcasing clean, minimalist geometry',
            title: 'Logo',
            data: LogoImage,
          },
          // --- Mockups row ---
          {
            src: '/projects/small-project/infographic-mockup.png',
            alt: 'Infographic poster mockup displayed in a real-world context',
            data: InfographicMockupImage,
          },
          {
            src: '/projects/small-project/kite-poster-mockup.png',
            alt: 'Kite poster mockup showing the design on a wall display',
            data: KitePosterMockupImage,
          },
          {
            src: '/projects/small-project/movie-poster-mockup.png',
            alt: 'Movie poster mockup presented in a cinematic promotional setting',
            data: MoviePosterMockupImage,
          },
          {
            src: '/projects/small-project/logo-mockup.png',
            alt: 'Logo mockup demonstrating real-world application on branded material',
            data: LogoMockupImage,
          },
        ],
        gridColumns: 4, // 4 images per row
        imageClass: 'h-80',
        // className: 'md:mx-12 lg:mx-56',
      },
    },
  ],
};
