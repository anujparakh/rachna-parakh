import { AboutContent } from './types';
import { commonContent } from './common-content';
import { ASSET_PREFIX } from '@/utils/constants';
import AboutImage from '@img/profile-square.png';

export const aboutContent: AboutContent = {
  ...commonContent,
  aboutSection: {
    title: 'About Me',
    paragraphs: [
      " Hello! I'm Rachna Parakh, a graphic design student at Austin Community College with a background in fine arts. I bring an artistic approach grounded in simplicity and intention, focusing on designs that feel clear, balanced, and meaningful.",
      "I enjoy creating thoughtful visual solutions – from logos, webdesigns, and editorial layouts to brand systems and interactive exhibits using tools like Illustrator, Photoshop, InDesign, Figma, and Procreate.",
      "I believe that good design is about making deliberate choices, choosing what to keep, what to remove, and how to bring clarity to complexity. When I'm not designing, you'll probably find me stretching or enjoying a quiet cup of chai."],
    aboutImage: {
      src: AboutImage,
      alt: 'Rachna Parakh - About Photo',
    },
    ctaButton: {
      text: 'View My Work',
      href: '/portfolio',
    },
  },
  philosophySection: {
    title: 'My Design Philosophy',
    items: [
      {
        title: 'Intentional',
        description:
          'Every design decision is deliberate, crafted to communicate clear meaning and purpose.'
      },
      {
        title: 'Creative',
        description:
          'Aesthetics inspire emotion. Thoughtful visuals create connections that leave a lasting impression.'
      },
      {
        title: 'Clean',
        description:
          'Simplicity creates room to breathe. Every element has space to exist, letting meaning emerge naturally.'
      },
    ],
  },
};
