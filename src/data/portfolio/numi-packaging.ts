import { PortfolioProjectData } from '@/components/portfolio/types';

export const numiPackagingProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/numi/heroImage.png',
      alt: 'Numi tea packaging hero featuring box and sachet mockups',
    },
    title: 'Numi Tea Packaging',
    subtitle: 'Sustainable packaging system for organic tea',
    imageClass: 'h-148',
  },
  summary: {
    title: 'Project Summary',
    content:
      'Numi Tea Packaging is a sustainable identity and packaging system designed for an organic tea line. The visual language blends botanic illustration, clean typography, and a natural materials palette to signal purity and craft. The system emphasizes shelf recognition, flavor clarity, and eco-friendly finishes that align with modern conscious consumer values.',
  },
  sections: [
    {
      id: 'moodboard',
      title: 'Mood Board',
      type: 'full-image',
      content: {
        layout: 'image-left',
        image: {
          src: '/projects/numi/moodboard-numi.png',
          alt: 'Mood board with botanical textures, earthy color swatches, paper fibers, and typographic references for Numi tea',
        },
        sidebarContent:
          'The mood board explores earthy greens, warm neutrals, and soft blacks. Hand-drawn botanicals pair with restrained typography to balance heritage and clarity. Uncoated, tactile substrates and minimal inks suggest sustainability and honesty in material choices.',
        imageClass: 'h-auto w-auto',
        className: 'mx-12 sm:mx-32 lg:mx-64',
      },
    },
    {
      id: 'sketches',
      title: 'Sketches',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/numi/Sketch 1.png',
            alt: 'Early packaging sketches exploring panel hierarchy and botanical frame',
          },
          {
            src: '/projects/numi/Sketch 2.png',
            alt: 'Thumbnail sketches testing logo lockups, flavor badges, and seal placement',
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
    {
      id: 'digital-explorations',
      title: 'Digital Explorations',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/numi/Digital_lemonGinger.png',
            alt: 'Digital concept with centered wordmark and illustrated tea leaf pattern',
          },
          {
            src: '/projects/numi/Digital_rooibus.png',
            alt: 'Alternate layout with vertical color band for flavor differentiation',
          },
          {
            src: '/projects/numi/Digital option 1.png',
            alt: 'Minimal variant emphasizing typography and reduced botanical detailing',
          },
        ],
        gridColumns: 3,
        imageHeight: 'auto',
      },
    },
    {
      id: 'final-design',
      title: 'Final Design',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/numi/Artboard 8.png',
            alt: 'Final Numi Orange Saffron packaging with citrus tones and bright yellow palette',
          },
          {
            src: '/projects/numi/Artboard 9.png',
            alt: 'Final Numi Rooibos Chai packaging with warm spice tones and botanical motifs',
          },
          {
            src: '/projects/numi/Artboard 10.png',
            alt: 'Final Numi Lemon Ginger packaging with warm orange hues and leaf illustration',
          },
        ],
        gridColumns: 1,
        imageHeight: 'auto',
      },
    },
    {
      id: 'packaging-mockup',
      title: 'Mockup',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/numi/',
          alt: 'Shelf mockup showing Numi tea boxes arranged together',
        },
        imageClass: 'h-auto w-auto',
      },
    },
  ],
};
