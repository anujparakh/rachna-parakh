import { PortfolioProjectData } from '@/components/portfolio/types';
import LogoImage from '@img/projects/fallout-theater/stickers/Asset 3@300x.png';
import Sticker1 from '@img/projects/fallout-theater/stickers/Asset 1@300x.png';
import Sticker2 from '@img/projects/fallout-theater/stickers/Asset 2@300x.png';
import Sticker3 from '@img/projects/fallout-theater/stickers/Asset 3@300x.png';
import Sticker4 from '@img/projects/fallout-theater/stickers/Asset 4@300x.png';
import Sticker5 from '@img/projects/fallout-theater/stickers/Asset 5@300x.png';
import Sticker6 from '@img/projects/fallout-theater/stickers/Asset 6@300x.png';
import AllStickers from '@img/projects/fallout-theater/stickers/all together-stickers.svg';

export const falloutTheaterProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/fallout-theater/stickers/Asset 3@300x.png',
      alt: 'Fallout Theater logo',
      data: LogoImage,
    },
    title: 'Fallout Theater',
    subtitle: 'Internship – Graphic Design & Visual Identity',
    imageClass: 'h-auto px-32 py-2 bg-white',
  },
  summary: {
    title: 'Internship Summary',
    content:
      "I worked on a series of design projects for Fallout Theater, an indie comedy club rooted in community, inclusivity, experimentation, and support for performers. My goal was to develop a cohesive set of deliverables that reflected the theater's personality while staying consistent with its brand across multiple formats and uses. Across the project set, I focused on translating the client\'s identity into work that felt welcoming, flexible, and visually unified. Each piece was designed to support the theater's voice, strengthen its presence, and provide practical assets that could be used across both digital and print applications.",
  },
  sections: [
    {
      id: 'menu',
      title: 'Menu',
      type: 'embed-group',
      content: {
        subSections: [
          {
            title: 'Phone Menu',
            figmaSrc:
              'https://www.canva.com/design/DAHJNO1-ijY/l3xHmv-f8EIRgXw6-5ABcw/view?embed',
            phoneFrame: true,
            description: 'Designed and embedded from Canva.',
          },
          {
            title: 'Printed Menu',
            figmaSrc:
              'https://www.canva.com/design/DAHJNFLiSiU/5IKkgfmUxLL_hhqF_j-N5w/view?embed',
            description: 'Designed and embedded from Canva.',
          },
        ],
      },
    },
    // {
    //   id: 'stickers',
    //   title: 'Stickers',
    //   type: 'image-grid',
    //   content: {
    //     images: [
    //       {
    //         src: '/projects/fallout-theater/stickers/Asset 1@300x.png',
    //         alt: 'Fallout Theater sticker 1',
    //         data: Sticker6,
    //       },
    //       {
    //         src: '/projects/fallout-theater/stickers/Asset 2@300x.png',
    //         alt: 'Fallout Theater sticker 2',
    //         data: Sticker1,
    //       },
    //       {
    //         src: '/projects/fallout-theater/stickers/Asset 3@300x.png',
    //         alt: 'Fallout Theater sticker 3',
    //         data: Sticker3,
    //       },
    //       {
    //         src: '/projects/fallout-theater/stickers/Asset 4@300x.png',
    //         alt: 'Fallout Theater sticker 4',
    //         data: Sticker4,
    //       },
    //       {
    //         src: '/projects/fallout-theater/stickers/Asset 5@300x.png',
    //         alt: 'Fallout Theater sticker 5',
    //         data: Sticker5,
    //       },
    //       {
    //         src: '/projects/fallout-theater/stickers/Asset 6@300x.png',
    //         alt: 'Fallout Theater sticker 6',
    //         data: Sticker2,
    //       },
    //     ],
    //     gridColumns: 3,
    //     imageClass: 'h-80',
    //   },
    // },
    {
      id: 'stickers-all',
      title: 'Stickers',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/fallout-theater/stickers/all together-stickers.svg',
          alt: 'All Fallout Theater stickers together',
          data: AllStickers,
        },
        imageClass: 'h-auto w-auto',
        className: 'mx-auto md:mx-32 lg:mx-64',
      },
    },
    {
      id: 'animated-presentation',
      title: 'Animated Presentation',
      type: 'figma-prototype',
      content: {
        figmaSrc:
          'https://www.canva.com/design/DAHJNCKr89A/yygzgafMnMcjKlt5pWyqRQ/view?embed',
        description:
          'Animated slides designed for Fallout Theater to showcase upcoming events.',
        imageClass: 'w-full h-[40vh] md:h-[80vh]',
        note: 'Use the controls to go through the slides. For the best experience on mobile, rotate your screen to landscape. Enjoy!',
      },
    },
  ],
};
