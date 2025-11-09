import { PortfolioProjectData } from '@/components/portfolio/types';
import MoodboardImage from '@img/projects/numi/moodboard-numi.png';
import Sketch1Image from '@img/projects/numi/Sketch 1.png';
import Sketch2Image from '@img/projects/numi/Sketch 2.png';
import DigitalLemonGingerImage from '@img/projects/numi/Digital_lemonGinger.png';
import DigitalRooibusImage from '@img/projects/numi/Digital_rooibus.png';
import DigitalOrangeSaffronImage from '@img/projects/numi/digital_orangeSaffron.png';
import FinalOrangeSaffronImage from '@img/projects/numi/Saffron Final.svg';
import FinalRooibosImage from '@img/projects/numi/Roibos Final.svg';
import FinalLemonGingerImage from '@img/projects/numi/Saffron Final.svg';
import HeroImage from '@img/projects/numi/heroImage.png';
import MockupYellow from '@img/projects/numi/yellowBackgroundMockup.png';
export const numiPackagingProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/numi/hero-image.png',
      alt: 'Numi Tea Packaging Project Hero',
      data: HeroImage,
    },
    title: 'Numi Tea Packaging',
    subtitle: 'Redesigning the Packaging for Numi Organic Teas',
    imageClass: 'h-148',
  },
  summary: {
    title: 'Project Summary',
    content:
      'This project focused on redesigning the packaging for Numi Organic Teas to better reflect the brand\'s natural and organic qualities. The goal was to create a clean, modern system that communicates transparency and trust while appealing to health-conscious consumers.'
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
          data: MoodboardImage,
        },
        sidebarContent:
          'The mood board explores earthy greens, warm neutrals, and soft blacks. Hand-drawn botanicals pair with restrained typography to balance heritage and clarity. Uncoated, tactile substrates and minimal inks suggest sustainability and honesty in material choices.',
        imageClass: 'h-auto w-auto',
        className: 'sm:mx-32 lg:mx-64',
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
            data: Sketch1Image,
          },
          {
            src: '/projects/numi/Sketch 2.png',
            alt: 'Thumbnail sketches testing logo lockups, flavor badges, and seal placement',
            data: Sketch2Image,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        textPosition: 'above',
        text: 'The key challenge was creating a cohesive brand that differentiates between flavors while maintaining a strong, unified shelf presence. Each tea needed its own distinct personality, expressed through bright, uplifting accent colors, yet the overall design had to remain grounded and elegant. Balancing vibrancy with restraint meant carefully pairing bold hues with soft greens, clean typography, and ample white space.'
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
            data: DigitalLemonGingerImage,
          },
          {
            src: '/projects/numi/Digital_rooibus.png',
            alt: 'Alternate layout with vertical color band for flavor differentiation',
            data: DigitalRooibusImage,
          },
          {
            src: '/projects/numi/digital_orangeSaffron.png',
            alt: 'Minimal variant emphasizing typography and reduced botanical detailing',
            data: DigitalOrangeSaffronImage,
          },
        ],
        gridColumns: 3,
        imageClass: 'bg-white',
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
            src: '/projects/numi/Artboard 9.png',
            alt: 'Final Numi Rooibos Chai packaging with warm spice tones and botanical motifs',
            data: FinalRooibosImage,
          },

        ],
        gridColumns: 1,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },
    },
    {
      id: 'final-design-2',
      title: '',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/numi/Artboard 8.png',
            alt: 'Final Numi Orange Saffron packaging with citrus tones and bright yellow palette',
            data: FinalOrangeSaffronImage,
          },

          {
            src: '/projects/numi/Artboard 10.png',
            alt: 'Final Numi Lemon Ginger packaging with warm orange hues and leaf illustration',
            data: FinalLemonGingerImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },

    },

    {
      id: 'brand-applications',
      title: 'Brand Applications',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/numi/standing-book-mockup.png',
          alt: 'Lightbox poster mockup showcasing Jaipur campaign design in a public space',
          data: MockupYellow,
        },
        imageClass: 'h-140',
      },
    },
    {
      id: 'reflections',
      title: 'Project Reflections',
      type: 'text-only',
      content: {
        text: "This project taught me the power of minimal, color-driven design in creating clarity and connection. I learned how to use bright accent colors to draw attention while maintaining a sense of calm and natural balance true to Numi\'s identity. Incorporating flat leaves, ingredient icons, and concise attribute lists helped me make the product\'s benefits clear at a glance." +
          "\n\n\Working within a cohesive yet flexible system pushed me to balance vibrancy with restraint, ensuring each flavor felt distinct but still part of a unified family. The process deepened my understanding of how color, structure, and simplicity can express both practicality and brand ethos, capturing the essence of rest, wellness, and sustainability that defines Numi.",
      },
    },

  ],
};
