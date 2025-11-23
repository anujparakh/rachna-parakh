import { PortfolioProjectData } from '@/components/portfolio';
import anneHathaway from '@/img/projects/personal-projects/anne-hathaway.png';
import bullCreek from '@/img/projects/personal-projects/bull-creek.png';
import girl from '@/img/projects/personal-projects/girl.jpg';
import inkAbstract1 from '@/img/projects/personal-projects/ink-abstract-1.png';
import inkAbstract2 from '@/img/projects/personal-projects/ink-abstract-2.png';
import inkAbstractRow2_1 from '@/img/projects/personal-projects/ink-abstract-row-2-1.png';
import inkAbstractRow2_2 from '@/img/projects/personal-projects/ink-abstract-row-2-2.png';
import inkChild from '@/img/projects/personal-projects/ink-child.jpg';
import oldMan from '@/img/projects/personal-projects/old-man.png';
import prashant from '@/img/projects/personal-projects/prashant.png';
import softPastel2 from '@/img/projects/personal-projects/soft pastel-1.png';

export const personalProjectsData: PortfolioProjectData = {
  hero: {
    title: 'Personal Projects',
    subtitle: 'A showcase of my personal art projects',
  },
  sections: [
    {
      id: 'dry-pastels',
      title: 'Dry Pastels',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '',
            alt: 'Bull Creek',
            data: bullCreek,
          },
          {
            src: '',
            alt: 'Soft Pastel 2',
            data: softPastel2,
          },
        ],
        gridColumns: 0,
        className: 'flex-wrap',
        imageHeight: 'auto',
        imageClass: '!w-auto h-[60vh]',
      },
    },
    {
      id: 'ink',
      title: 'Pen and Ink',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '',
            alt: 'Ink Abstract 1',
            data: inkAbstract1,
          },
          {
            src: '',
            alt: 'Ink Abstract 2',
            data: inkAbstract2,
          },
          {
            src: '',
            alt: 'Ink Child',
            data: inkChild,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: '!w-auto h-[60vh]',
      },
    },
    {
      id: 'ink-2nd-row',
      title: '',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '',
            alt: 'Ink Abstract 3',
            data: inkAbstractRow2_1,
          },
          {
            src: '',
            alt: 'Ink Abstract 4',
            data: inkAbstractRow2_2,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: '!w-auto h-[60vh]',
      },
    },
    {
      id: 'portraits',
      title: 'Portraits',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '',
            alt: 'Anne Hathaway Portrait',
            data: anneHathaway,
          },
          {
            src: '',
            alt: 'Girl Portrait',
            data: girl,
          },
          {
            src: '',
            alt: 'Old Man Portrait',
            data: oldMan,
          },
          {
            src: '',
            alt: 'Prashant Portrait',
            data: prashant,
          },
        ],
        gridColumns: 0,
        imageHeight: 'auto',
        imageClass: '!w-auto h-[60vh]',
      },
    },
  ],
};
