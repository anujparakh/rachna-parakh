import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/tree-to-cup/hero-image.svg';
import DesktopWireframeImage from '@img/projects/tree-to-cup/Tree2Cup-Wireframe-desktop.svg';
import MobileWireframeImage from '@img/projects/tree-to-cup/Tree2Cup-Wireframe-phone.svg';
import Moodboard1 from '@img/projects/tree-to-cup/moodboard-1.svg';
import Moodboard2 from '@img/projects/tree-to-cup/moodboard-2.svg';

export const treeToCup: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/tree-to-cup/Logo.png',
      alt: 'Tree 2 Cup Hero',
      data: HeroImage,
    },
    title: 'Tree 2 Cup',
    subtitle: 'Website and Packaging Design for Sustainable Coffee',
  },
  summary: {
    title: 'Project Summary',
    content:
      'Tree 2 Cup is a sustainable coffee brand that focuses on eco-friendly packaging and ethical sourcing. This project involved designing a cohesive website and packaging that reflects the brand’s commitment to sustainability while appealing to environmentally conscious consumers.',
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
        titleSize: 'text-2xl',
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
        titleSize: 'text-2xl',
      },
    },
  ],
};
