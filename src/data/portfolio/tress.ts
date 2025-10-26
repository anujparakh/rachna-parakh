import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/tress/heroImage.png';
import MoodboardImage from '@img/projects/tress/moodboard.png';
import SketchLayoutImage from '@img/projects/tress/sketch-layout-cover-page.png';
import FullSpreadSketchImage from '@img/projects/tress/full-spread-sketches.png';
import DigitalVariation1Image from '@img/projects/tress/digital-variation-1.png';
import DigitalVariation2Image from '@img/projects/tress/digital-variation-2.png';
import DigitalVariation3Image from '@img/projects/tress/digital-variation-3.png';
import FinalLogoImage from '@img/projects/tress/final-logo-main.png';
import StandingBookImage from '@img/projects/tress/standing-book-mockup.png';

export const tressProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/tress/heroImage.png',
      alt: 'Tress Project Hero',
      data: HeroImage,
    },
    title: 'Tress of the Emerald Sea',
    subtitle: 'Editorial design and layout for a contemporary publication',
    imageClass: 'h-146',
  },
  summary: {
    title: 'Project Summary',
    content:
      'Tress is an editorial design project that explores contemporary layout and typography principles. The project involved creating a cohesive visual identity for a publication, focusing on readability, visual hierarchy, and engaging design elements that enhance the reading experience.',
  },
  sections: [
    {
      id: 'moodboard-tress',
      title: 'Mood Board',
      type: 'full-image',
      content: {
        layout: 'image-left',
        image: {
          src: '/projects/tress/moodboard.png',
          alt: 'Mood board featuring warm earthy tones, typography samples, and cultural inspiration for Jaipur campaign',
          data: MoodboardImage,
        },
        sidebarContent:
          'The mood board exploration focused on warm, earthy tones that evoke comfort and intellectual curiosity. Typography research emphasized readable serif fonts that balance tradition with contemporary appeal. Visual elements drew inspiration from vintage library aesthetics, handcrafted bookbinding, and cozy reading nooks. The color palette centers around rich browns, warm creams, and deep forest greens to create an inviting atmosphere that feels both timeless and fresh.',
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
            src: '/projects/tress/sketch-layout-cover-page.png',
            alt: 'Initial pencil sketches of Jaipur logo concepts',
            data: SketchLayoutImage,
          },
          {
            src: '/projects/tress/full-spread-sketches.png',
            alt: 'Full spread layout sketches for Tress publication',
            data: FullSpreadSketchImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
    {
      id: 'digital-variations',
      title: 'Digital Trials',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/tress/digital-variation-1.png',
            alt: ' variation 1',
            data: DigitalVariation1Image,
          },
          {
            src: '/projects/tress/digital-variation-2.png',
            alt: ' variation 2',
            data: DigitalVariation2Image,
          },
          {
            src: '/projects/tress/digital-variation-3.png',
            alt: 'variation 3',
            data: DigitalVariation3Image,
          },
        ],
        gridColumns: 3,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },
    },
    {
      id: 'final-design',
      title: 'Final Design',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/tress/final-logo-main.png',
          alt: 'Final Jaipur Travel Campaign logo featuring elegant serif typography and symbolic icon',
          data: FinalLogoImage,
        },
        imageClass: 'h-auto w-auto p-12 bg-white',
      },
    },
    {
      id: 'brand-applications',
      title: 'Brand Applications',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/tress/standing-book-mockup.png',
            alt: 'Lightbox poster mockup showcasing Jaipur campaign design in a public space',
            data: StandingBookImage,
          },
          {
            src: '/projects/tress/heroImage.png',
            alt: 'Lightbox poster mockup showcasing Jaipur campaign design in a public space',
            data: HeroImage,
          },
        ],
        gridColumns: 1,
        imageClass: 'h-140',
      },
    },
  ],
};
