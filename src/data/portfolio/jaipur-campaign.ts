import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/jaipur/heroImage.png';
import MoodboardImage from '@img/projects/jaipur/moodboard-jaipur.png';
import SketchesImage from '@img/projects/jaipur/sketches.png';
import DigitalLogoImage from '@img/projects/jaipur/digital-logo.svg';
import FinalLogoImage from '@img/projects/jaipur/final-logo-main.svg';
import LogosTogetherImage from '@img/projects/jaipur/logos-together.svg';
import ElementsImage from '@img/projects/jaipur/elements.svg';
import BrochureFrontImage from '@img/projects/jaipur/brochure-mockup-front.png';
import BrochureInteriorImage from '@img/projects/jaipur/brochure-mockup-1.png';
import LightboxPosterImage from '@img/projects/jaipur/lightbox-poster-mockup.png';
import PhoneMockupImage from '@img/projects/jaipur/phone-mockup.png';
import PosterMockupImage from '@img/projects/jaipur/poster-mockup.png';
import ComputerMockupImage from '@img/projects/jaipur/computer-mockup.png';
import KeychainMockupImage from '@img/projects/jaipur/keychain-mockup.png';
import TShirtMockupImage from '@img/projects/jaipur/tshirt_mockup.png';

export const jaipurCampaignProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/jaipur/heroImage.png',
      alt: 'Hero image of the Jaipur Travel Campaign showcasing cultural motifs of the Pink City',
      data: HeroImage,
    },
    title: 'Jaipur Campaign',
    subtitle: 'Branding the Pink City: A Multi-Channel Campaign for Jaipur',
    imageClass: 'h-128',
  },
  summary: {
    title: 'Project Summary',
    content:
      "A project doesn\'t get much more personal than this. Branding the city where I was born and raised was an honor. My campaign for the \"Pink City\" is not just about promoting a destination; it's about celebrating a part of myself." +
      "\n\nThe goal was to position Jaipur as a contemporary cultural icon, where royal heritage meets modern design. The campaign spanned key touchpoints including a logo, brochure, responsive website, and social media posts. This multi-channel campaign was built to attract a new generation of travelers and locals alike, emphasizing authenticity, craftsmanship, and visual sophistication."
  },
  sections: [
    {
      id: 'moodboard',
      title: 'Mood Board',
      type: 'full-image',
      content: {
        layout: 'image-left',
        image: {
          src: '/projects/jaipur/moodboard-jaipur.png',
          alt: 'Mood board featuring warm earthy tones, typography samples, and cultural inspiration for Jaipur campaign',
          data: MoodboardImage,
        },
        sidebarContent:
          'The mood board exploration focused on warm, earthy tones that evoke comfort and intellectual curiosity. Typography research emphasized readable serif fonts that balance tradition with contemporary appeal. Visual elements drew inspiration from vintage library aesthetics, handcrafted bookbinding, and cozy reading nooks. The color palette centers around rich browns, warm creams, and deep forest greens to create an inviting atmosphere that feels both timeless and fresh.',
        imageClass: 'h-auto w-auto',
        className: 'lg:mx-64',
      },
    },
    {
      id: 'sketches',
      title: 'Sketches',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/jaipur/sketches.png',
            alt: 'Initial pencil sketches of Jaipur logo concepts',
            data: SketchesImage,
          },
          {
            src: '/projects/jaipur/digital-logo.svg',
            alt: 'Digital iterations of Jaipur logo designs inspired by Rajasthani motifs',
            data: DigitalLogoImage,
            modalHeight: '[85vh]',
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        textPosition: 'above',
        text: 'The challenge was to distill Jaipur\'s rich heritage and vibrant culture into a cohesive identity that appeals to both modern travelers and traditional admirers. With so many symbolic elements like arches, elephants, textiles, and geometric patterns, the task was to curate and simplify without losing authenticity. Balancing grandeur with approachability and timelessness with energy was key to creating a refined, vibrant campaign that bridges Jaipur\'s royal legacy with its contemporary spirit.'
      },
    },
    {
      id: 'final-design',
      title: 'Final Design',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/jaipur/final-logo-main.svg',
          alt: 'Final Jaipur Travel Campaign logo featuring elegant serif typography and symbolic icon',
          data: FinalLogoImage,
          modalHeight: '[85vh]',
        },
        imageClass: 'h-auto w-auto p-12 bg-white',
        className: 'lg:mx-64',
      },
    },
    {
      id: 'final-variations',
      title: 'Variations and Elements',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/jaipur/logos-together.svg',
            alt: 'Set of alternate Jaipur logo variations in different color palettes and layouts',
            data: LogosTogetherImage,
            modalHeight: '[85vh]',
          },
          {
            src: '/projects/jaipur/elements.svg',
            alt: 'Brand design elements including icons, patterns, and typography used in Jaipur campaign',
            data: ElementsImage,
            modalHeight: '[85vh]',
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },
    },
    {
      id: 'brochure',
      title: 'Brochure',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/jaipur/brochure-mockup-front.png',
            alt: 'Front cover of Jaipur tourism brochure mockup highlighting campaign visuals',
            data: BrochureFrontImage,
          },
          {
            src: '/projects/jaipur/brochure-mockup-1.png',
            alt: 'Interior spread of Jaipur tourism brochure featuring imagery and typography layout',
            data: BrochureInteriorImage,
          },
        ],
        gridColumns: 2,
        imageClass: 'h-80',
      },
    },
    {
      id: 'brand-applications',
      title: 'Brand Applications',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/jaipur/lightbox-poster-mockup.png',
            alt: 'Lightbox poster mockup showcasing Jaipur campaign design in a public space',
            data: LightboxPosterImage,
          },
          {
            src: '/projects/jaipur/phone-mockup.png',
            alt: 'Mobile app screen mockup featuring Jaipur Travel Campaign visuals',
            data: PhoneMockupImage,
          },
          {
            src: '/projects/jaipur/poster-mockup.png',
            alt: 'Promotional poster mockup for Jaipur Travel Campaign displayed in an urban setting',
            data: PosterMockupImage,
          },
          {
            src: '/projects/jaipur/computer-mockup.png',
            alt: 'Website interface mockup for Jaipur Travel Campaign shown on a desktop computer',
            data: ComputerMockupImage,
          },
          {
            src: '/projects/jaipur/keychain-mockup.png',
            alt: 'Branded keychain mockup featuring Jaipur logo emblem',
            data: KeychainMockupImage,
          },
          {
            src: '/projects/jaipur/tshirt_mockup.png',
            alt: 'Branded t-shirt mockup featuring Jaipur campaign design',
            data: TShirtMockupImage,
          },
        ],
        gridColumns: 2,
        imageClass: 'h-80',
      },
    },
    {
      id: 'reflections',
      title: 'Project Reflections',
      type: 'text-only',
      content: {
        text: "This campaign successfully captures Jaipur\'s unique blend of majestic heritage and vibrant modernity.. Simplifying Jaipur\'s rich visual language while preserving its essence allowed the brand to feel timeless yet fresh, resonating with diverse travelers seeking both authenticity and elegance." +
          "\n\nThe project reinforced the importance of thoughtful curation, choosing motifs and colors that tell a clear, cohesive story. The final campaign invites audiences to see Jaipur as both timeless and dynamic, celebrating its architectural beauty and cultural vitality while inspiring curiosity and connection."
      },
    },

  ],
};
