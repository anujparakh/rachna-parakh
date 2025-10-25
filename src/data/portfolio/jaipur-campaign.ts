import { PortfolioProjectData } from '@/components/portfolio/types';

export const jaipurCampaignProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/jaipur/heroImage.png',
      alt: 'Hero image of the Jaipur Travel Campaign showcasing cultural motifs of the Pink City',
    },
    title: 'Jaipur Travel Campaign',
    subtitle: 'Cultural tourism campaign celebrating the Pink City',
    imageClass: 'h-128',
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
          alt: 'Mood board featuring warm earthy tones, typography samples, and cultural inspiration for Jaipur campaign',
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
            src: '/projects/jaipur/sketches.png',
            alt: 'Initial pencil sketches of Jaipur logo concepts',
          },
          {
            src: '/projects/jaipur/digital-logo.svg',
            alt: 'Digital iterations of Jaipur logo designs inspired by Rajasthani motifs',
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
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
        },
        imageClass: 'h-auto w-auto p-12 bg-white',
        className: 'mx-12 sm:mx-32 lg:mx-64',
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
          },
          {
            src: '/projects/jaipur/elements.svg',
            alt: 'Brand design elements including icons, patterns, and typography used in Jaipur campaign',
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },
    },
    {
      id: 'brochure-cover',
      title: 'Brochure',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/jaipur/brochure-mockup-front.png',
          alt: 'Front cover of Jaipur tourism brochure mockup highlighting campaign visuals',
        },
        imageClass: 'h-auto w-auto',
      },
    },
    {
      id: 'brochure-interior',
      title: '',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/jaipur/brochure-mockup-1.png',
          alt: 'Interior spread of Jaipur tourism brochure featuring imagery and typography layout',
        },
        imageClass: 'h-auto w-auto',
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
          },
          {
            src: '/projects/jaipur/phone-mockup.png',
            alt: 'Mobile app screen mockup featuring Jaipur Travel Campaign visuals',
          },
          {
            src: '/projects/jaipur/poster-mockup.png',
            alt: 'Promotional poster mockup for Jaipur Travel Campaign displayed in an urban setting',
          },
          {
            src: '/projects/jaipur/computer-mockup.png',
            alt: 'Website interface mockup for Jaipur Travel Campaign shown on a desktop computer',
          },
          {
            src: '/projects/jaipur/keychain-mockup.png',
            alt: 'Branded keychain mockup featuring Jaipur logo emblem',
          },
        ],
        gridColumns: 3,
        imageClass: 'h-80',
      },
    },
  ],
};
