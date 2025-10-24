import { PortfolioProjectData } from '@/components/portfolio/types';

// Example template for creating new portfolio projects
export const templateProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/placeholders/hero-placeholder.svg',
      alt: 'Template Project Hero',
    },
    title: 'Template Project',
    subtitle: 'A template for creating new portfolio projects',
  },
  summary: {
    title: 'Project Summary',
    content:
      'This is a template project that demonstrates how to structure portfolio data using the reusable component system. Simply copy this structure and replace with your own content.',
  },
  sections: [
    {
      id: 'process',
      title: 'Design Process',
      type: 'image-text',
      content: {
        image: {
          src: '/placeholder-project.svg',
          alt: 'Design Process',
        },
        paragraphs: [
          'First paragraph describing the design process and methodology used.',
          'Second paragraph with additional details about the approach and research.',
        ],
        layout: 'image-left',
        imageHeight: 'h-64',
      },
    },
    {
      id: 'concept',
      title: 'Concept Development',
      type: 'full-image',
      content: {
        image: {
          src: '/placeholders/moodboard-placeholder.svg',
          alt: 'Concept Board',
        },
        imageHeight: 'h-96',
      },
    },
    {
      id: 'sketches',
      title: 'Initial Explorations',
      type: 'image-with-sidebar',
      content: {
        image: {
          src: '/placeholders/sketches-placeholder.svg',
          alt: 'Design Sketches',
        },
        sidebarContent:
          'Description of the sketching and ideation phase, explaining the various concepts explored.',
        imageHeight: 'h-64',
      },
    },
    {
      id: 'final-solutions',
      title: 'Final Solutions',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/final-design-placeholder.svg',
            alt: 'Final Design Option 1',
          },
          {
            src: '/placeholder-project.svg',
            alt: 'Final Design Option 2',
          },
        ],
        gridColumns: 2,
        imageHeight: 'h-80',
      },
    },
    {
      id: 'applications',
      title: 'Design Applications',
      type: 'image-grid',
      content: {
        images: [
          {
            src: '/placeholders/mockup-placeholder.svg',
            alt: 'Application 1',
          },
          {
            src: '/placeholder-project.svg',
            alt: 'Application 2',
          },
          {
            src: '/placeholders/mockup-placeholder.svg',
            alt: 'Application 3',
          },
        ],
        gridColumns: 3,
        imageHeight: 'h-64',
      },
    },
    {
      id: 'outcomes',
      title: 'Project Outcomes',
      type: 'text-only',
      content: {
        text: 'Summary of the project outcomes, results, and learnings. This section reflects on the success of the project and any insights gained during the process.',
      },
    },
  ],
};
