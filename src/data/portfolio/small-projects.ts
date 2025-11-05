import { PortfolioProjectData } from '@/components/portfolio/types';
import InfographicImage from '@img/projects/small-project/infographic-poster.png';
import InfographicMockupImage from '@img/projects/small-project/infographic-mockup.png';
import KitePosterImage from '@img/projects/small-project/kite-poster.png';
import KitePosterMockupImage from '@img/projects/small-project/kite-poster-mockup.png';
import MoviePosterImage from '@img/projects/small-project/movie-poster.png';

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
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Concept One',
            data: InfographicImage,
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Concept One',
            data: InfographicMockupImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        // className: 'md:mx-12  lg:mx-56',
      },
    },
    {
      id: 'sp-2',
      title: 'Poster',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Concept One',
            data: KitePosterImage,
          },
          {
            src: '/placeholders/moodboard-placeholder.svg',
            alt: 'Concept One',
            data: KitePosterMockupImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        // className: 'md:mx-12  lg:mx-56',
      },
    },
    {
      id: 'sp-3',
      title: 'Movie Poster',
      type: 'full-image',
      content: {
        image: {
          src: '/placeholders/mockup-placeholder.svg',
          alt: 'Concept Three',
          data: MoviePosterImage,
        },
        imageHeight: 'auto',
        className: 'md:mx-12 lg:mx-56',
      },
    },
  ],
};
