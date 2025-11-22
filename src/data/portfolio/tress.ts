import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/tress/heroImage.png';
import ResearchImage from '@img/projects/tress/tress-research.png';
import MoodboardImage from '@img/projects/tress/moodboard.png';
import SketchLayoutImage from '@img/projects/tress/sketch-layout-cover-page.png';
import FullSpreadSketchImage from '@img/projects/tress/full-spread-sketches.png';
import DigitalVariation1Image from '@img/projects/tress/digital-variation-1.png';
import DigitalVariation2Image from '@img/projects/tress/digital-variation-2.png';
import DigitalVariation3Image from '@img/projects/tress/digital-variation-3.png';
import FinalLogoImage from '@img/projects/tress/final-logo-main.png';
import StandingBookImage from '@img/projects/tress/standing-book-mockup.png';
import MockupImage from '@img/projects/tress/heroImage.png';

export const tressProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/tress/heroImage.png',
      alt: 'Tress Project Hero',
      data: HeroImage,
    },
    title: 'Tress of the Emerald Sea',
    subtitle:
      "A conceptual book-jacket project for Brandon Sanderson's fantasy novel Tress of the Emerald Sea",
    imageClass: 'h-146',
  },
  summary: {
    title: 'Project Summary',
    content:
      "A book jacket for Tress of the Emerald Sea by Brandon Sanderson, created to capture its spirit of wonder and adventure while reflecting the novel's fantasy and nautical themes. Designed to engage readers and convey the tone of Sanderson's storytelling through a cohesive visual language that balances intrigue, imagination, and authenticity.",
  },
  sections: [
    {
      id: 'research',
      title: 'Research and Discovery',
      type: 'image-text',
      content: {
        image: {
          src: '/projects/tress/research-placeholder.png',
          alt: 'Research and Discovery Process',
          data: ResearchImage,
        },
        paragraphs: [
          'My research began with analyzing the fantasy genre and its core audience to understand prevailing visual trends, color palettes, and typographic styles that resonate with readers of similar works. I then immersed myself in the world of Tress of the Emerald Sea to uncover what gives the story its distinctive charm.',
          "Through close reading and visual exploration, key themes emerged: adventure, resilience, and the balance between whimsy and depth. Narrative details such as the spores, teacups, and vast emerald waters, along with Tress's quiet determination, became symbolic anchors for the design.",
          "This research informed the selection of imagery, composition, and layout choices to create a cover that feels true to the novel's spirit while aligning with contemporary fantasy aesthetics.",
        ],
        layout: 'image-left',
        imageHeight: 'auto',
        titleSize: 'text-2xl',
        className: 'p-15',
      },
    },
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
        textPosition: 'above',
      },
    },
    {
      id: 'creative-challenge',
      title: 'Creative Challenge',
      type: 'text-only',
      content: {
        text:
          "A key creative challenge in designing the jacket was capturing the story's sense of wonder and depth in a simplistic style. Achieving a cohesive, visually compelling design required thoughtful control of typography, composition, and symbolism, while ensuring the cover reflected the novel's distinctive atmosphere and the quiet strength of Sanderson's storytelling. " +
          '\n\nWorking within a restrained two-to-three color palette demanded both restraint and boldness, where each hue, contrast, and spatial relationship carried purpose. Each refinement, adjusting balance, spacing, and type rhythm, helped transform restraint into energy, allowing the cover to feel both composed and alive.',
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
        titleSize: 'text-3xl',
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
            data: MockupImage,
          },
        ],
        gridColumns: 1,
        imageClass: 'h-140',
      },
    },
    {
      id: 'reflections',
      title: 'Project Reflections',
      type: 'text-only',
      content: {
        text: "Completing the book jacket design for Tress of the Emerald Sea was a rewarding experience that deepened my appreciation for the power of visual storytelling. The style I followed embraced simplicity and bold silhouettes, which allowed the core themes of fantasy and adventure to shine through. By limiting the color palette and focusing on clean imagery, the design effectively sparked curiosity and conveyed the spirit of the story. The process reinforced how simplicity, when intentional, can make a story's essence shine through.",
      },
    },
  ],
};
