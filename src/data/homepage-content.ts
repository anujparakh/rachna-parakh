import { HomepageContent } from './types';
import { commonContent } from './common-content';
import { ASSET_PREFIX } from '@/utils/constants';

export const homepageContent: HomepageContent = {
  ...commonContent,
  portfolioSection: {
    title: 'Portfolio Case Studies',
    projects: [
      {
        id: 'book-people',
        title: 'Book People',
        description: 'Brief description of project one',
        image: {
          src:
            ASSET_PREFIX +
            '/projects/bookpeople/Parakh_Rachna_Book People-500pxl.png',
          alt: 'Book People Mockup',
        },
        link: '/portfolio/book-people',
        category: 'Branding',
      },
      {
        id: 'tress',
        title: 'Tress',
        description:
          'Editorial design and layout for a contemporary publication',
        image: {
          src: ASSET_PREFIX + '/projects/tress/heroImage.png',
          alt: 'Tress Publication Design',
        },
        link: '/portfolio/tress',
        category: 'Editorial Design',
      },
      {
        id: 'jmb-booklet',
        title: 'JMB Booklet',
        description: 'A comprehensive booklet design project',
        image: {
          src:
            ASSET_PREFIX +
            '/projects/JMB/Hero-image-Perspective-Open-Magazine-Mockup-light-blue.png',
          alt: 'JMB Booklet Design',
        },
        link: '/portfolio/jmb-booklet',
        category: 'Print Design',
      },
      {
        id: 'numi-packaging',
        title: 'Numi Packaging',
        description: 'Sustainable packaging design for organic tea products',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Numi Packaging Design',
        },
        link: '/portfolio/numi-packaging',
        category: 'Packaging Design',
      },
      {
        id: 'rasa-label',
        title: 'Rasa Beverage Label',
        description: 'Modern label design for premium beverage branding',
        image: {
          src: ASSET_PREFIX + '/projects/rasa/heroImage.png',
          alt: 'Rasa Beverage Label Design',
        },
        link: '/portfolio/rasa-label',
        category: 'Label Design',
      },
      {
        id: 'jaipur-campaign',
        title: 'Jaipur Travel Campaign',
        description: 'Cultural tourism campaign celebrating the Pink City',
        image: {
          src: ASSET_PREFIX + '/projects/jaipur/brochure-mockup-front.png',
          alt: 'Jaipur Travel Campaign Design',
        },
        link: '/portfolio/jaipur-campaign',
        category: 'Campaign Design',
      },

      {
        id: 'tree-to-cup',
        title: 'Tree to Cup',
        description: 'Sustainable coffee packaging design',
        image: {
          src: ASSET_PREFIX + '/projects/tree-to-cup/preview.png',
          alt: 'Tree to Cup Design',
        },
        link: '/portfolio/tree-to-cup',
        category: 'Campaign Design',
      },

      {
        id: 'small-projects',
        title: 'Small Projects',
        description: 'A collection of various small design projects',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Small Design Projects',
        },
        link: '/portfolio/small-projects',
        category: 'Campaign Design',
      },

      {
        id: 'personal-projects',
        title: 'Personal Projects',
        description: 'A showcase of my personal design projects',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Personal Design Projects',
        },
        link: '/portfolio/personal-projects',
        category: 'Campaign Design',
      },
    ],
  },
  ctaButton: {
    text: 'MY STORY',
    href: '/about',
  },
};
