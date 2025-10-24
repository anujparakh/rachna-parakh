import { PortfolioProjectData } from '@/components/portfolio/types';

export const rasaLabelProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/placeholders/hero-placeholder.svg',
      alt: 'Rasa Beverage Label Project Hero',
    },
    title: 'Rasa Beverage Label',
    subtitle: 'Modern label design for premium beverage branding',
  },
  summary: {
    title: 'Project Summary',
    content:
      'Rasa Beverage Label is a premium branding project focused on creating distinctive label designs for a new beverage line. The project emphasizes modern aesthetics, brand differentiation, and shelf appeal while maintaining production feasibility and regulatory compliance.',
  },
  sections: [
    {
      id: 'concept',
      title: 'Design Concept',
      type: 'text-only',
      content: {
        text: 'The design concept centered around creating a premium yet approachable brand identity that would stand out in the competitive beverage market. Focus was placed on typography, color harmony, and creating a memorable visual identity.',
      },
    },
  ],
};
