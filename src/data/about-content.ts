import { AboutContent } from './types';
import { commonContent } from './common-content';
import { ASSET_PREFIX } from '@/utils/constants';

export const aboutContent: AboutContent = {
  ...commonContent,
  aboutSection: {
    title: 'Who am I?',
    paragraphs: [
      "Hello! I'm Rachna Parakh, a passionate graphic design student currently pursuing my certificate at Austin Community College. With a background in fine arts, I bring a versatile and artistic approach to my design work. I specialize in developing clear, effective visual solutions.",
      "I enjoy creating thoughtful, creative visual solutions – from logos and brand guides to interactive exhibits and editorial layouts. I'm skilled in Adobe Illustrator, Photoshop, InDesign, Figma, and Procreate, and I love using these tools to turn ideas into clear, engaging designs.",
      "I believe that good design is both beautiful and purposeful – it tells stories, builds connections, and leaves an impression. When I'm not designing, I'm probably enjoying a good cup of chai",
      "Thank you for taking the time to learn about me. I invite you to explore my portfolio and get in touch if you'd like to collaborate or chat about a project – I'd love to hear from you!",
    ],
    aboutImage: {
      src: ASSET_PREFIX + '/placeholder-profile.svg',
      alt: 'Rachna Parakh - About Photo',
    },
    ctaButton: {
      text: 'VIEW MY RESUME',
      href: '/',
    },
  },
  philosophySection: {
    title: 'My Design Philosophy',
    items: [
      {
        title: 'Purposeful',
        description:
          'Every design decision serves a purpose and contributes to the overall message and user experience.',
      },
      {
        title: 'Beautiful',
        description:
          'Aesthetics matter. I believe beautiful design creates emotional connections and lasting impressions.',
      },
      {
        title: 'Meaningful',
        description:
          'Great design tells a story and creates meaningful experiences that resonate with people.',
      },
    ],
  },
};
