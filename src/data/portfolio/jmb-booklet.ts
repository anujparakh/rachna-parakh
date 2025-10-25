import { PortfolioProjectData } from '@/components/portfolio/types';

export const jmbBookletProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/JMB/Hero-image-Perspective-Open-Magazine-Mockup-light-blue.png',
      alt: 'JMB booklet hero showing cover and interior spread mockups',
    },
    title: 'JMB Booklet',
    subtitle: 'A comprehensive booklet design project',
    imageClass: 'h-148',
  },
  summary: {
    title: 'Project Summary',
    content:
      'The JMB Booklet project involved creating a comprehensive informational booklet with a focus on clear layout, typography, and visual hierarchy. The design emphasizes readability and user engagement through thoughtful use of space and visual elements.',
  },
  sections: [
    {
      id: 'moodboard',
      title: 'Mood Board',
      type: 'full-image',
      content: {
        layout: 'image-left',
        image: {
          src: '/projects/JMB/moodboard-jmb.png',
          alt: 'Mood board with typographic references, grid studies, and neutral color palette for JMB booklet',
        },
        sidebarContent:
          'The mood board explores editorial grids, serif–sans pairings, and a monochrome-first palette with selective accent color. Inspiration centers on legible type scales, airy margins, and strong rhythm across spreads.',
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
            src: '/projects/JMB/sketch-1.png',
            alt: 'Layout sketch exploring headline placement and asymmetrical grid',
          },
          {
            src: '/projects/JMB/sketch-2.png',
            alt: 'Thumbnail sketch testing image-to-text ratio and caption flow',
          },
          {
            src: '/projects/JMB/sketch-3.png',
            alt: 'Spread sketch iterating on columns, gutters, and pull-quote positioning',
          },
        ],
        gridColumns: 3,
        imageHeight: 'auto',
      },
    },
    {
      id: 'mockup',
      title: 'Mockup',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/JMB/magazine-mockup-Free-1.png',
          alt: 'Booklet cover mockup showcasing title typography and accent color band',
        },
        imageClass: 'h-auto w-auto',
      },
    },
    {
      id: 'booklet-pdf',
      title: 'JMB Booklet (PDF)',
      type: 'pdf-viewer',
      content: {
        pdfSrc: '/projects/JMB/Final-JMB-Booklet.pdf',
        imageHeight: 'h-128',
        showDownload: true,
      },
    },
  ],
};
