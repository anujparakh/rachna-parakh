import { ASSET_PREFIX } from '@/utils/constants';
import { CommonContent } from './types';

export const commonContent: CommonContent = {
  profile: {
    name: 'Rachna Parakh',
    title: 'Graphic Designer',
    subtitle: 'Creating beautiful and meaningful designs',
    location: 'Austin, Texas',
    bio: 'A passionate graphic designer based in Austin, Texas. With a background in fine arts, I bring a versatile and artistic approach to my design work.',
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
