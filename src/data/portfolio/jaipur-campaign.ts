import { PortfolioProjectData } from '@/components/portfolio/types';

export const jaipurCampaignProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/placeholders/hero-placeholder.svg',
      alt: 'Jaipur Travel Campaign Project Hero',
    },
    title: 'Jaipur Travel Campaign',
    subtitle: 'Cultural tourism campaign celebrating the Pink City',
  },
  summary: {
    title: 'Project Summary',
    content:
      "The Jaipur Travel Campaign is a comprehensive visual identity project designed to promote tourism to the historic Pink City. The campaign combines traditional Rajasthani cultural elements with contemporary design principles to create compelling marketing materials that capture the essence of Jaipur's rich heritage and vibrant culture.",
  },
  sections: [
    {
      id: 'concept',
      title: 'Campaign Concept',
      type: 'text-only',
      content: {
        text: "The campaign concept draws inspiration from Jaipur's architectural heritage, vibrant markets, and rich cultural traditions. The design language emphasizes the city's unique pink sandstone architecture while incorporating modern typography and layout principles to appeal to contemporary travelers.",
      },
    },
  ],
};
