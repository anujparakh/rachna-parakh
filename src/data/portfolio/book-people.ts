import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/bookpeople/store board rectangle.png';
import OriginalLogoImage from '@img/projects/bookpeople/original-logo.png';
import MoodboardImage from '@img/projects/bookpeople/moodboard-v3.svg';
import TypeResearchImage from '@img/projects/bookpeople/type-research.png';
import Sketches1Image from '@img/projects/bookpeople/sketches-1.png';
import Sketches2Image from '@img/projects/bookpeople/sketches-2.png';
import FirstRoundLogosImage from '@img/projects/bookpeople/first-round-logos.png';
import ColoredFinalLogosImage from '@img/projects/bookpeople/colored-final-logos.png';
import FinalLogoMainImage from '@img/projects/bookpeople/final-logo-main.svg';
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
    subtitle:
      'A comprehensive rebranding project for an independent bookstore.',
  },
  summary: {
    title: 'Project Summary',
    content:
      ' A conceptual identity refresh for Book People, Austin’s iconic independent bookstore, designed to reflect its welcoming, community spirit and love of reading, unifying its visual & storytelling presence across every platform.',
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
          'My research began with uncovering what makes Book People a true Austin treasure. It’s far more than a bookstore! It’s a cultural landmark, home to two floors of books, a cozy coffee shop, and a curated mix of local gifts, creating a lively and genuine atmosphere.',
          'Through observation and market research, key insights emerged: customers valued authenticity, community connection, and a cozy atmosphere that larger retailers couldn’t replicate. The new identity needed to celebrate that sense of pride and belonging while bridging the gap between tradition and modernity, creating a timeless, cohesive system that speaks to both digital natives and lifelong readers.',
          'In essence, the brand needed to feel as authentic, inviting, and proudly local as the experience of stepping inside Book People itself.',
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
        text: 'A key creative challenge was turning the idea of community and books into a simple, memorable logo that feels welcoming to everyone. It was also important to blend in the local Texas spirit, so the design needed to reflect Book People’s unique bond with its neighborhood. Achieving both warmth and a strong local vibe, while ensuring the design worked effectively in monochrome and at smaller sizes also demanded careful exploration of layout and shape.',
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
        text: "I'm proud of the final Book People logo. It’s easy to use on many platforms and items, but still full of meaning. The design weaves together modern lines with a nod to local roots, the star shape signals the lone star of Texas, while the books and people show the store’s welcoming community and love of reading. Each detail helps tell Book People’s story and makes the brand feel at home in Austin.",
      },
    },
  ],
};
