import { PortfolioProjectData } from '@/components/portfolio/types';

export const jaipurCampaignProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/jaipur/heroImage.png',
      alt: 'Jaipur Travel Campaign Project Hero',
    },
    title: 'Jaipur Travel Campaign',
    subtitle: 'Cultural tourism campaign celebrating the Pink City',
    imageHeight: 'auto',
  },
  summary: {
    title: 'Project Summary',
    content:
      "The Jaipur Travel Campaign is a comprehensive visual identity project designed to promote tourism to the historic Pink City. The campaign combines traditional Rajasthani cultural elements with contemporary design principles to create compelling marketing materials that capture the essence of Jaipur's rich heritage and vibrant culture.",
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
          alt: 'Project Mood Board',
        },
        sidebarContent:
          'The mood board exploration focused on warm, earthy tones that evoke comfort and intellectual curiosity. Typography research emphasized readable serif fonts that balance tradition with contemporary appeal. Visual elements drew inspiration from vintage library aesthetics, handcrafted bookbinding, and cozy reading nooks. The color palette centers around rich browns, warm creams, and deep forest greens to create an inviting atmosphere that feels both timeless and fresh.',
        imageClass: 'h-auto w-auto',
        className: 'mx-12 sm:mx-32 lg:mx-64',
      },
    },
    {
      id: 'initial-sketches',
      title: 'Initial Sketches',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/jaipur/sketches.png',
          alt: 'Design Sketches 1',
        },

        text: 'Early concept sketches explored various approaches to representing jaipur, community, and knowledge. I experimented with typographic treatments and iconographic elements.',
        imageClass: 'h-auto w-auto',
        className: 'mx-12 sm:mx-32 lg:mx-64',
      },
    },
    {
      id: 'digital-sketches',
      title: 'Digital Sketches',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/jaipur/digital-logos-1.png',
          alt: 'First Round Logos',
        },
        imageClass: 'h-auto w-auto',
        className: 'mx-12 sm:mx-32 lg:mx-64',
      },
    },
    {
      id: 'final',
      title: 'Final Design',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/jaipur/final-logo-main.png',
          alt: 'First Round Logos',
        },
        imageClass: 'h-auto w-auto',
        className: 'mx-12 sm:mx-32 lg:mx-64',
      },
    },
    {
      id: 'final-additional',
      title: '',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/jaipur/final-logo-2.png',
            alt: 'First Round Logos',
          },
          {
            src: '/projects/jaipur/final-logo-3.png',
            alt: 'First Round Logos',
          },
          {
            src: '/projects/jaipur/final-logo-4.png',
            alt: 'First Round Logos',
          },
        ],
        gridColumns: 3,
        imageHeight: 'auto',
      },
    },
    {
      id: 'brand-elements',
      title: 'Elements',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/jaipur/final-logo-2.png',
            alt: 'First Round Logos',
          },
          {
            src: '/projects/jaipur/final-logo-3.png',
            alt: 'First Round Logos',
          },
          {
            src: '/projects/jaipur/final-logo-4.png',
            alt: 'First Round Logos',
          },
        ],
        gridColumns: 3,
        imageHeight: 'auto',
      },
    },
  ],
};
