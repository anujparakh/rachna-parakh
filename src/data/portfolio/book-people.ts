import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/bookpeople/store board rectangle.png';
import OriginalLogoImage from '@img/projects/bookpeople/original-logo.png';
import MoodboardImage from '@img/projects/bookpeople/moodboard-v3.svg';
import TypeResearchImage from '@img/projects/bookpeople/type-research.png';
import Sketches1Image from '@img/projects/bookpeople/sketches-1.png';
import Sketches2Image from '@img/projects/bookpeople/sketches-2.png';
import FirstRoundLogosImage from '@img/projects/bookpeople/first-round-logos.png';
import ColoredFinalLogosImage from '@img/projects/bookpeople/colored-final-logos.png';
import FinalLogoMainImage from '@img/projects/bookpeople/final-logo-main.png';
import AllFinalImagesImage from '@img/projects/bookpeople/all-final-images.svg';
import StorefrontMockupImage from '@img/projects/bookpeople/Parakh_Rachna_Book People-500pxl.png';
import CraftEnvelopeImage from '@img/projects/bookpeople/craft-envelope.png';
import KeychainMockupImage from '@img/projects/bookpeople/Free_Keychain_Mockup_3-V2.png';
import BrownBagImage from '@img/projects/bookpeople/brown-bag.png';
import ToteBagImage from '@img/projects/bookpeople/tote-bag.png';

// New structured data for reusable components
export const bookPeopleProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/bookpeople/store board rectangle.png',
      alt: 'Book People Project Hero',
      data: HeroImage,
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
          src: '/projects/bookpeople/original-logo.png',
          alt: 'Research and Discovery Process',
          data: OriginalLogoImage,
        },
        paragraphs: [
          "I began by conducting interviews with the bookstore owners and regular customers to understand the community's needs and preferences. Market research revealed that customers valued authenticity, community connection, and a cozy atmosphere.",
          'Key findings included the importance of accessibility, the desire for a timeless yet modern aesthetic, and the need to appeal to both digital natives and traditional book enthusiasts.',
        ],
        layout: 'image-left',
        imageHeight: 'auto',
        titleSize: 'text-2xl',
      },
    },
    {
      id: 'moodboard',
      title: 'Mood Board and Type Research',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/bookpeople/moodboard-v3.svg',
            alt: 'Project Mood Board',
            data: MoodboardImage,
          },
          {
            src: '/projects/bookpeople/type-research.png',
            alt: 'Type Research',
            data: TypeResearchImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'bg-white',
      },
    },
    {
      id: 'initial-sketches',
      title: 'Initial Sketches',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/bookpeople/sketches-1.png',
            alt: 'Design Sketches 1',
            data: Sketches1Image,
          },
          {
            src: '/projects/bookpeople/sketches-2.png',
            alt: 'Design Sketches 2',
            data: Sketches2Image,
          },
        ],
        text: 'Early concept sketches explored various approaches to representing books, community, and knowledge. I experimented with typographic treatments and iconographic elements.',
        gridColumns: 2,
        imageHeight: 'auto',
      },
    },
    {
      id: 'digital-sketches',
      title: 'Digital Sketches',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/bookpeople/first-round-logos.png',
            alt: 'First Round Logos',
            data: FirstRoundLogosImage,
          },
          {
            src: '/projects/bookpeople/colored-final-logos.png',
            alt: 'Final Design Logos',
            data: ColoredFinalLogosImage,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        titleSize: 'text-2xl',
      },
    },
    {
      id: 'final',
      title: 'Final Design',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/bookpeople/final-logo-main.png',
          alt: 'First Round Logos',
          data: FinalLogoMainImage,
        },
        imageClass: 'h-auto w-auto bg-white',
        className: 'mx-auto md:mx-32 lg:mx-64',
        titleSize: 'text-3xl',
      },
    },
    {
      id: 'final-all',
      title: 'Logo Variations',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/bookpeople/all-final-images.svg',
          alt: 'All Final Images',
          data: AllFinalImagesImage,
        },
        imageClass: 'h-auto w-auto bg-white',
        className: 'mx-auto sm:mx-32 lg:mx-64',
      },
    },

    // {
    //   id: 'final-additional',
    //   title: '',
    //   type: 'image-grid',
    //   content: {
    //     images: [
    //       {
    //         src: '/projects/bookpeople/finals/final-blue-horizontal-transparent.png',
    //         alt: 'First Round Logos',
    //       },
    //       {
    //         src: '/projects/bookpeople/finals/final-rust.png',
    //         alt: 'First Round Logos',
    //       },
    //       {
    //         src: '/projects/bookpeople/finals/final-rust-horizontal.png',
    //         alt: 'First Round Logos',
    //       },
    //       {
    //         src: '/projects/bookpeople/finals/final-black-vertical.png',
    //         alt: 'First Round Logos',
    //       },
    //       {
    //         src: '/projects/bookpeople/finals/final-black-horizontal.png',
    //         alt: 'First Round Logos',
    //       },
    //       {
    //         src: '/projects/bookpeople/finals/final-all-white-blue.png',
    //         alt: 'First Round Logos',
    //       },
    //       {
    //         src: '/projects/bookpeople/finals/final-all-white-horizontal-blue.png',
    //         alt: 'First Round Logos',
    //       }],
    //     gridColumns: 4,
    //     imageHeight: 'auto',
    //   }
    // },
    {
      id: 'brand-applications',
      title: 'Brand Applications',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/projects/bookpeople/Parakh_Rachna_Book People-500pxl.png',
            alt: 'Storefront Signage Mockup',
            data: StorefrontMockupImage,
          },
          {
            src: '/projects/bookpeople/craft-envelope.png',
            alt: 'Gift Card Envelope Mockup',
            data: CraftEnvelopeImage,
          },
          {
            src: '/projects/bookpeople/Free_Keychain_Mockup_3-V2.png',
            alt: 'Brand Keychain Mockup',
            data: KeychainMockupImage,
          },
          {
            src: '/projects/bookpeople/brown-bag.png',
            alt: 'Shopping Bag Mockup',
            data: BrownBagImage,
          },

          {
            src: '/projects/bookpeople/tote-bag.png',
            alt: 'Storefront Signage Mockup',
            data: ToteBagImage,
          },
        ],
        gridColumns: 3,
        imageClass: 'h-80',
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
