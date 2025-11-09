import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/projects/JMB/Hero-image-Perspective-Open-Magazine-Mockup-light-blue.png';
import MoodboardImage from '@img/projects/JMB/moodboard-jmb.png';
import Sketch1Image from '@img/projects/JMB/sketch-1.png';
import Sketch2Image from '@img/projects/JMB/sketch-2.png';
import Sketch3Image from '@img/projects/JMB/sketch-3.png';
import MockupImage from '@img/projects/JMB/magazine-mockup-Free-1.png';

export const jmbBookletProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/projects/JMB/Hero-image-Perspective-Open-Magazine-Mockup-light-blue.png',
      alt: 'JMB booklet hero showing cover and interior spread mockups',
      data: HeroImage,
    },
    title: 'JMB Booklet',
    subtitle: 'A Booklet Honoring the Legacy of Josef Müller-Brockmann',
    imageClass: 'h-148',
  },
  summary: {
    title: 'Project Summary',
    content:
      'This project involved creating a booklet about one of my design heroes, the legendary and influential Swiss designer Josef Müller-Brockmann, whose timeless work embodies clarity, precision, and minimalism in graphic design.',
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
          data: MoodboardImage,
        },
        sidebarContent:
          'The mood board explores editorial grids, serif–sans pairings, and a monochrome-first palette with selective accent color. Inspiration centers on legible type scales, airy margins, and strong rhythm across spreads.',
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
            src: '/projects/JMB/sketch-1.png',
            alt: 'Layout sketch exploring headline placement and asymmetrical grid',
            data: Sketch1Image,
          },

          {
            src: '/projects/JMB/sketch-3.png',
            alt: 'Spread sketch iterating on columns, gutters, and pull-quote positioning',
            data: Sketch3Image,
          },
          {
            src: '/projects/JMB/sketch-2.png',
            alt: 'Thumbnail sketch testing image-to-text ratio and caption flow',
            data: Sketch2Image,
          },
        ],
        gridColumns: 2,
        imageHeight: 'auto',
        imageClass: 'bg-white',
        text: "Interpreting JMB's principles through my own design lens presented a creative challenge. Merging elements of Bauhaus, such as geometric shapes, primary colors, and the “form follows function” philosophy, with Müller-Brockmann's rigorous, disciplined grid systems required a thoughtful and intentional blending of styles. Balancing homage with originality meant using structured grids, restrained color palettes, and purposeful composition and visual rhythm inspired by both movements.",
        textPosition: 'above',
      },
    },
    {
      id: 'mockup',
      title: 'Brand Application',
      type: 'full-image',
      content: {
        image: {
          src: '/projects/JMB/magazine-mockup-Free-1.png',
          alt: 'Booklet cover mockup showcasing title typography and accent color band',
          data: MockupImage,
        },
        imageClass: 'h-auto w-auto',
      },
    },
    {
      id: 'booklet-pdf',
      title: 'Booklet',
      type: 'pdf-viewer',
      content: {
        pdfSrc: '/jmb-booklet-final.pdf',
        imageHeight: 'h-128',
        showDownload: true,
        titleSize: 'text-3xl',
      },
    },
    {
      id: 'reflections',
      title: 'Project Reflections',
      type: 'text-only',
      content: {
        text: "This project deepened my respect for disciplined design and clarified the value of intentional choices. Navigating Müller-Brockmann\'s philosophies helped me refine my awareness of grid-based systems and their impact. I am grateful for the chance to honor his legacy, and I now approach design problems with a renewed commitment to clarity, simplicity, and purpose. The final piece reflects those ideals while allowing my own perspective and voice to come through.",
      },
    },
  ],
};
