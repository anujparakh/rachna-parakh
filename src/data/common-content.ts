import { CommonContent } from './types';
import ProfileImage from '@img/logo-profile-transparent.png';

export const commonContent: CommonContent = {
  profile: {
    name: 'Rachna Parakh',
    title: 'Graphic Designer',
    subtitle: 'Creating beautiful and meaningful designs',
    location: 'Austin, Texas',
    bio: 'A passionate graphic designer based in Austin, Texas. I bring an artistic approach shaped by my background in fine arts. My work reflects my passion for minimalism and my desire to bring peace and order to a chaotic world.',
    profileImage: {
      src: ProfileImage,
      alt: 'Rachna Parakh - Profile Photo',
    },
    socialLinks: {
      instagram: 'https://instagram.com/your_handle',
      linkedin: 'https://www.linkedin.com/in/rachna-parakh',
      email: 'rachnas-art@anujinfotech.com',
    },
  },
  navigation: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Contact', href: '/contact' },
  ],
};
