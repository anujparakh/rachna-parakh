import { PortfolioProjectData } from '@/components/portfolio/types';

// New structured data for reusable components
export const bookPeopleProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/bookpeople/store board rectangle.png',
      alt: 'Book People Project Hero',
    },
    title: 'Book People',
    subtitle: 'A comprehensive branding project for an independent bookstore',
  },
  summary: {
    title: 'Project Summary',
    content:
      'Book People is a local independent bookstore that needed a complete brand identity refresh. The goal was to create a warm, inviting brand that celebrates the love of reading and community connection, including logo design, brand guidelines, storefront signage, and marketing materials.',
  },
  sections: [
    {
      id: 'research',
      title: 'Research and Discovery',
      type: 'image-text',
      content: {
        image: {
          src: '/projects/bookpeople/original-book-people.jpg',
          alt: 'Research and Discovery Process',
        },
        paragraphs: [
          "I began by conducting interviews with the bookstore owners and regular customers to understand the community's needs and preferences. Market research revealed that customers valued authenticity, community connection, and a cozy atmosphere.",
          'Key findings included the importance of accessibility, the desire for a timeless yet modern aesthetic, and the need to appeal to both digital natives and traditional book enthusiasts.',
        ],
        layout: 'image-left',
        imageHeight: 'h-64',
        titleSize: 'text-3xl',
      },
    },
    {
      id: 'moodboard',
      title: 'Mood Board',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/bookpeople/moodboard.png',
          alt: 'Project Mood Board',
        },
        imageHeight: 'auto',
      },
    },
    {
      id: 'sketches',
      title: 'Initial Sketches',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/bookpeople/sketches-1.png',
            alt: 'Design Sketches 1',
          },
          {
            src: '/projects/bookpeople/sketches-2.png',
            alt: 'Design Sketches 2',
          },
        ],
        text: 'Early concept sketches explored various approaches to representing books, community, and knowledge. I experimented with typographic treatments and iconographic elements.',
        gridColumns: 2,
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
            src: '/projects/bookpeople/first-round-logos.png',
            alt: 'Final Logo Design',
          },
          {
            src: '/projects/bookpeople/colored-final-logos.png',
            alt: 'Final Design Variations',
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
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
            src: '/projects/bookpeople/Craft Envelope PSD Mockup.png',
            alt: 'Gift Card Envelope Mockup',
          },
          {
            src: '/projects/bookpeople/Free_Keychain_Mockup_3-V2.png',
            alt: 'Brand Keychain Mockup',
          },
          {
            src: '/projects/bookpeople/Mockup brown papaer bag.png',
            alt: 'Shopping Bag Mockup',
          },
          {
            src: '/projects/bookpeople/Parakh_Rachna_Book People-500pxl.png',
            alt: 'Storefront Signage Mockup',
          },
          {
            src: '/projects/bookpeople/store-mockup.png',
            alt: 'Store Window Mockup',
          },
        ],
        gridColumns: 3,
        imageHeight: 'h-64',
      },
    },
    {
      id: 'reflections',
      title: 'Project Reflections',
      type: 'text-only',
      content: {
        text: 'This project taught me the importance of community-centered design. Working closely with the bookstore owners and their customers provided invaluable insights that shaped the final design direction. The positive reception from the community and the increase in foot traffic after the rebrand confirmed that thoughtful, research-driven design can have a real impact on local businesses.',
      },
    },
  ],
};
