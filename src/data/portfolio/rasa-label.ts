import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/rasa/heroImage.png';
import MoodboardImage from '@img/projects/rasa/moodboard-rasa.png';
import Sketches1Image from '@img/projects/rasa/sketches-1.png';
import Sketches2Image from '@img/projects/rasa/sketches-2.png';
import Sketches3Image from '@img/projects/rasa/sketches-3.png';
import Digital1Image from '@img/projects/rasa/digital-1.svg';
import Digital2Image from '@img/projects/rasa/digital-2.svg';
import Digital3Image from '@img/projects/rasa/digital-3.svg';
import Digital4Image from '@img/projects/rasa/digital-4.svg';
import RoseImage from '@img/projects/rasa/final/Rose.svg';
import KhusImage from '@img/projects/rasa/final/Khus.svg';
import SaffronImage from '@img/projects/rasa/final/Saffron.svg';
import StudioMockupImage from '@img/projects/rasa/studio-background-mockup.png';

export const rasaLabelProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/rasa/heroImage.png',
      alt: 'Rasã label system hero showcasing bottle mockups and brand elements',
      data: HeroImage,
    },
    title: 'Rasã',
    subtitle: 'Label and visual identity for Indian cordial sharbats',
    imageClass: 'h-138',
  },
  summary: {
    title: 'Project Summary',
    content:
      'Rasã is a label and packaging identity for a line of Indian cordials inspired by classic sharbats—Rose, Saffron, and Khus. The system blends heritage motifs with contemporary typography, using a rich, sensorial palette to convey flavor, nostalgia, and craft. The goal: a shelf-ready identity that feels premium, modern, and unmistakably rooted in South Asian design traditions.',
  },
  sections: [
    {
      id: 'moodboard',
      title: 'Mood Board',
      type: 'full-image',
      content: {
        layout: 'image-left',
        image: {
          src: '/projects/rasa/moodboard-rasa.png',
          alt: 'Mood board with floral motifs, spice tones, glass textures, and typographic references for Rasã',
          data: MoodboardImage,
        },
        sidebarContent:
          'Warm florals and spice-inspired hues guide the palette—rose, saffron, pistachio, and cream—paired with tactile glass highlights and foil accents. Typographic studies balance a refined serif for flavor naming with a clean grotesk for clarity and modernity.',
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
            src: '/projects/rasa/sketches-1.png',
            alt: 'Early label thumbnail sketches exploring arches and frames',
            data: Sketches1Image,
          },
          {
            src: '/projects/rasa/sketches-2.png',
            alt: 'Sketches testing ornament density and lockups for Rasã wordmark',
            data: Sketches2Image,
          },
          {
            src: '/projects/rasa/sketches-3.png',
            alt: 'Flavor badge explorations for Rose, Saffron, and Khus',
            data: Sketches3Image,
          },
        ],
        gridColumns: 3,
        imageHeight: 'auto',
      },
    },
    {
      id: 'digital-comps',
      title: 'Digital Explorations',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/rasa/digital-1.svg',
            alt: 'Digital label concept with delicate floral border and centered wordmark',
            data: Digital1Image,
          },
          {
            src: '/projects/rasa/digital-2.svg',
            alt: 'Alternate digital layout with vertical flavor ribbon and seal',
            data: Digital2Image,
          },
          {
            src: '/projects/rasa/digital-3.svg',
            alt: 'Minimal digital variant emphasizing typography and foil accent',
            data: Digital3Image,
          },
          {
            src: '/projects/rasa/digital-4.svg',
            alt: 'Minimal digital variant emphasizing typography and foil accent',
            data: Digital4Image,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'w-full h-auto',
      },
    },
    {
      id: 'final-design',
      title: 'Final Designs',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/rasa/final/Rose.svg',
          alt: 'Final Rasã label components showcasing typography, motifs, and color palette',
          data: RoseImage,
        },
        imageClass: 'h-auto w-auto bg-white',
      },
    },
    {
      id: 'final-designs',
      title: '',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/rasa/final/Khus.svg',
            alt: 'Final Rasã Khus label with deep green tones and geometric motif',
            data: KhusImage,
          },
          {
            src: '/projects/rasa/final/Saffron.svg',
            alt: 'Final Rasã Saffron label with golden highlights and warm spice-inspired palette',
            data: SaffronImage,
          },
        ],
        gridColumns: 2, // one image per line
        imageHeight: 'auto',
        imageClass: 'w-full h-auto',
      },
    },
    {
      id: 'brand-application',
      title: 'Brand Application',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/rasa/studio-background-mockup.png',
          alt: 'Bottle mockup showcasing Rasã label applied on glass with foil highlights',
          data: StudioMockupImage,
        },
        imageClass: 'h-148 w-auto',
      },
    },
  ],
};
