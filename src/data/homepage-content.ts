import { HomepageContent } from './types';
import { commonContent } from './common-content';
import { ASSET_PREFIX } from '@/utils/constants';
import BookPeopleImage from '@img/projects/bookpeople/Parakh_Rachna_Book People-500pxl.png';
import TressCoverImage from '@img/projects/tress/heroImage.png';
import JMBHeroImage from '@img/projects/JMB/Hero-image-Perspective-Open-Magazine-Mockup-light-blue.png';
import RasaHeroImage from '@img/projects/rasa/heroImage.png';
import JaipurBrochureImage from '@img/projects/jaipur/brochure-mockup-front.png';
import TreeToCupPreviewImage from '@img/projects/tree-to-cup/cover-image.svg';
import NumiHeroImage from '@img/projects/numi/heroImage.png';
import SmallProjectsImage from '@img/projects/small-project/mojo-mockup.png';

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
          alt: 'Book People Mockup',
          src: BookPeopleImage,
        },
        link: '/portfolio/book-people',
        category: 'Rebranding',
      },
      {
        id: 'tress',
        title: 'Tress',
        description:
          'Editorial design and layout for a contemporary publication',
        image: {
          alt: 'Tress Publication Design',
          src: TressCoverImage,
        },
        link: '/portfolio/tress',
        category: 'Book Jacket Design',
      },
      {
        id: 'jaipur-campaign',
        title: 'Jaipur Travel Campaign',
        description: 'Cultural tourism campaign celebrating the Pink City',
        image: {
          alt: 'Jaipur Travel Campaign Design',
          src: JaipurBrochureImage,
        },
        link: '/portfolio/jaipur-campaign',
        category: 'Campaign Design',
      },

      {
        id: 'numi-packaging',
        title: 'Numi Packaging',
        description: 'Sustainable packaging design for organic tea products',
        image: {
          alt: 'Numi Packaging Design',
          src: NumiHeroImage,
        },
        link: '/portfolio/numi-packaging',
        category: 'Packaging Redesign',
      },
      {
        id: 'jmb-booklet',
        title: 'JMB Booklet',
        description: 'A comprehensive booklet design project',
        image: {
          alt: 'JMB Booklet Design',
          src: JMBHeroImage,
        },
        link: '/portfolio/jmb-booklet',
        category: 'Booklet Design',
      },

      {
        id: 'rasa-label',
        title: 'Rasa Beverage Label',
        description: 'Modern label design for premium beverage branding',
        image: {
          alt: 'Rasa Beverage Label Design',
          src: RasaHeroImage,
        },
        link: '/portfolio/rasa-label',
        category: 'Label Design',
      },
      {
        id: 'tree-to-cup',
        title: 'Tree to Cup',
        description: 'Sustainable coffee packaging design',
        image: {
          alt: 'Tree to Cup Design',
          src: TreeToCupPreviewImage,
        },
        link: '/portfolio/tree-to-cup',
        category: 'Web Design',
      },
      {
        id: 'small-projects',
        title: 'Additional Projects',
        description: 'A collection of various small design projects',
        image: {
          alt: 'Small Design Projects',
          src: SmallProjectsImage,
        },
        link: '/portfolio/small-projects',
        category: 'Projects',
      },

      // TODO: Uncomment when small projects and personal projects are ready

      // {
      //   id: 'personal-projects',
      //   title: 'Personal Projects',
      //   description: 'A showcase of my personal design projects',
      //   image: {
      //     alt: 'Personal Design Projects',
      //     src: Pl  aceholderImage,
      //   },
      //   link: '/portfolio/personal-projects',
      //   category: 'Campaign Design',
      // },
    ],
  },
  ctaButton: {
    text: 'MY STORY',
    href: '/about',
  },
};
