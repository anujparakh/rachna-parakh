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
          src: ASSET_PREFIX + '/projects/bookpeople/store-mockup.png',
          alt: 'Book People Mockup',
        },
        link: '/portfolio/book-people',
        category: 'Branding',
      },
      {
        id: 'tress',
        title: 'Tress Book Cover',
        description: 'Brief description of project two',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Tress Book Cover Preview',
        },
        link: '/portfolio/tress',
        category: 'Web Design',
      },
      {
        id: 'jmb-booklet',
        title: 'JMB Booklet',
        description: 'Brief description of project three',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'JMB Booklet Preview',
        },
        link: '/portfolio/jmb-booklet',
        category: 'Print Design',
      },
      {
        id: 'numi-packaging',
        title: 'Numi Packaging',
        description: 'Brief description of project four',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Numi Packaging Preview',
        },
        link: '/portfolio/numi-packaging',
        category: 'Illustration',
      },
      {
        id: 'project-5',
        title: 'Project Five',
        description: 'Brief description of project five',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Project Five Preview',
        },
        link: '/portfolio/project-5',
        category: 'Logo Design',
      },
      {
        id: 'project-6',
        title: 'Project Six',
        description: 'Brief description of project six',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Project Six Preview',
        },
        link: '/portfolio/project-6',
        category: 'Typography',
      },
    ],
  },
  ctaButton: {
    text: 'MY STORY',
    href: '/about',
  },
};
