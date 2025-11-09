import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/tree-to-cup/hero-image.svg';
import DesktopWireframeImage from '@img/projects/tree-to-cup/Tree2Cup-Wireframe-desktop.svg';
import MobileWireframeImage from '@img/projects/tree-to-cup/Tree2Cup-Wireframe-phone.svg';
import Moodboard1 from '@img/projects/tree-to-cup/moodboard-1.svg';
import Moodboard2 from '@img/projects/tree-to-cup/moodboard-2.svg';
import BucketHatMockupImage from '@img/projects/tree-to-cup/bucketHat_mockup.png';

export const treeToCup: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/tree-to-cup/Logo.png',
      alt: 'Tree 2 Cup Hero',
      data: HeroImage,
    },
    title: 'Tree to Cup',
    subtitle: 'Website and Packaging Design for Sustainable Coffee',
  },
  summary: {
    title: 'Project Summary',
    content:
      'The goal of the project was to design a user-friendly and visually appealing website for Tree 2 Cup, a coffee brand. The objective was to make the online shopping experience simple, engaging, and accessible to all users.'
      + "\n\nThe website emphasizes intuitive navigation, clean layouts, and responsive design across desktop and mobile. From exploring coffee blends to completing a purchase, every interaction is designed to feel seamless and enjoyable."
      + "\n\nI developed a prototype that showcases the full user journey, from discovery to checkout, highlighting clarity and ease of use throughout."
  },
  sections: [
    {
      id: 'moodboard',
      title: 'Moodboard',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/tree-to-cup/Tree2Cup-Moodboard-1.png',
            alt: 'Moodboard showing natural textures and earthy color palette',
            data: Moodboard1,
          },
          {
            src: '/projects/tree-to-cup/Tree2Cup-Moodboard-2.png',
            alt: 'Moodboard featuring packaging inspiration and organic material studies',
            data: Moodboard2,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },
    },
    {
      id: 'wireframes',
      title: 'Desktop',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/tree-to-cup/Tree2Cup-Wireframe-desktop.svg',
            alt: 'Desktop Wireframe for Tree to Cup',
            scrollable: true,
            data: DesktopWireframeImage,
            openModal: false
          },
        ],
        gridColumns: 1,
        imageClass: 'bg-white h-auto',
        titleSize: 'text-3xl',
      },
    },
    {
      id: 'figma-prototype-desktop',
      title: 'Prototype',
      type: 'figma-prototype',
      content: {
        figmaSrc:
          'https://embed.figma.com/proto/SG8uyueZwj0KZ3y1tjj6wq/Comp-4?node-id=281-574&scaling=scale-down&content-scaling=fixed&page-id=281%3A573&starting-point-node-id=281%3A574&embed-host=share',
        titleSize: 'text-3xl',
        className: 'hidden md:block',
        imageClass: 'rounded-lg',
      },
    },
    {
      id: 'wireframes-mobile',
      title: 'Mobile',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/tree-to-cup/Tree2Cup-Wireframe-phone.svg',
            alt: 'Mobile Wireframe for Tree to Cup',
            scrollable: true,
            data: MobileWireframeImage,
            openModal: false
          },
        ],
        gridColumns: 1,
        imageClass: 'bg-white h-auto',
        titleSize: 'text-3xl',
        className: 'md:mx-64',
      },
    },
    {
      id: 'figma-prototype-mobile',
      title: 'Prototype',
      type: 'figma-prototype',
      content: {
        figmaSrc:
          'https://embed.figma.com/proto/SG8uyueZwj0KZ3y1tjj6wq/Comp-4?node-id=208-137&scaling=scale-down&content-scaling=fixed&page-id=95%3A10&starting-point-node-id=208%3A137&embed-host=share',
        titleSize: 'text-3xl',
      },
    },
    {
      id: 'brand-applications',
      title: 'Brand Applications',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/tree-to-cup/bucketHat_mockup.png',
          alt: 'Bucket Hat Mockup for Tree to Cup',
          data: BucketHatMockupImage,
        },
        imageClass: 'h-140',
      },
    },
    {
      id: 'reflections',
      title: 'Project Reflections',
      type: 'text-only',
      content: {
        text: "This project gave me an exciting introduction to UI/UX design and the process behind creating intuitive digital experiences. I learned how much thought goes into every detail — from layout and flow to accessibility and user behavior. Understanding how customers interact with a website helped me think more critically about clarity, navigation, and usability. Overall, the experience strengthened my design thinking and deepened my appreciation for the balance between creativity and functionality in user-centered design.",
      },
    },

  ],
};
