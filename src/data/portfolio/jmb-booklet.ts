import { PortfolioProjectData } from '@/components/portfolio/types';

export const jmbBookletProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/placeholders/hero-placeholder.svg',
      alt: 'JMB Booklet Project Hero',
    },
    title: 'JMB Booklet',
    subtitle: 'A comprehensive booklet design project',
  },
  summary: {
    title: 'Project Summary',
    content:
      'The JMB Booklet project involved creating a comprehensive informational booklet with a focus on clear layout, typography, and visual hierarchy. The design emphasizes readability and user engagement through thoughtful use of space and visual elements.',
  },
  sections: [
    {
      id: 'concept',
      title: 'Design Concept',
      type: 'text-only',
      content: {
        text: 'The design concept focused on creating a clean, professional layout that would effectively communicate complex information while maintaining visual interest. Typography and white space were key elements in achieving this goal.',
      },
    },
  ],
};
