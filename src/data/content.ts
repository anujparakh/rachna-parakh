import { HomepageContent } from './types';

export const homepageContent: HomepageContent = {
  profile: {
    name: 'Rachna Parakh',
    title: 'Graphic Designer & Visual Artist',
    subtitle: 'Creating beautiful and meaningful designs',
    location: 'Austin, Texas',
    bio: 'A passionate designer with expertise in visual communication, branding, and creative storytelling. With a love for clean aesthetics, meaningful design, and attention to detail.',
    profileImage: {
      src: '/placeholder-profile.svg', // Replace with actual image path
      alt: 'Rachna Parakh - Profile Photo',
    },
    socialLinks: {
      instagram: 'https://instagram.com/your_handle',
      linkedin: 'https://linkedin.com/in/your-profile',
      email: 'hello@rachnaparakh.com',
    },
  },
  navigation: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Contact', href: '/contact' },
  ],
  portfolioSection: {
    title: 'Portfolio Case Studies',
    projects: [
      {
        id: 'project-1',
        title: 'Project One',
        description: 'Brief description of project one',
        image: {
          src: '/placeholder-project.svg',
          alt: 'Project One Preview',
        },
        link: '/portfolio/project-1',
        category: 'Branding',
      },
      {
        id: 'project-2',
        title: 'Project Two',
        description: 'Brief description of project two',
        image: {
          src: '/placeholder-project.svg',
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
          src: '/placeholder-project.svg',
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
          src: '/placeholder-project.svg',
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
          src: '/placeholder-project.svg',
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
          src: '/placeholder-project.svg',
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
