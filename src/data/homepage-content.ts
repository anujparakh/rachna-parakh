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
        id: 'project-2',
        title: 'Project Two',
        description: 'Brief description of project two',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Project Two Preview',
        },
        link: '/portfolio/project-2',
        category: 'Web Design',
      },
      {
        id: 'project-3',
        title: 'Project Three',
        description: 'Brief description of project three',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Project Three Preview',
        },
        link: '/portfolio/project-3',
        category: 'Print Design',
      },
      {
        id: 'project-4',
        title: 'Project Four',
        description: 'Brief description of project four',
        image: {
          src: ASSET_PREFIX + '/placeholder-project.svg',
          alt: 'Project Four Preview',
        },
        link: '/portfolio/project-4',
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
