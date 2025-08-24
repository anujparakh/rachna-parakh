import { ASSET_PREFIX } from '@/utils/constants';
import { CommonContent } from './types';

export const commonContent: CommonContent = {
  profile: {
    name: 'Rachna Parakh',
    title: 'Graphic Designer & Visual Artist',
    subtitle: 'Creating beautiful and meaningful designs',
    location: 'Austin, Texas',
    bio: 'A passionate designer with expertise in visual communication, branding, and creative storytelling. With a love for clean aesthetics, meaningful design, and attention to detail.',
    profileImage: {
      src: ASSET_PREFIX + '/placeholder-profile.svg', // TODO: Replace with actual image path
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
};
