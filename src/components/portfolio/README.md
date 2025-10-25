# Portfolio Component System

This system provides reusable components for creating consistent portfolio project pages with minimal code duplication.

## Components Overview

### Core Components

- **`PortfolioLayout`** - Main wrapper component that handles header, footer, and layout
- **`PortfolioHero`** - Hero section with image, title, and subtitle
- **`PortfolioTextSection`** - Text-only sections (like summaries or reflections)
- **`PortfolioImageTextSection`** - Side-by-side image and text
- **`PortfolioFullImageSection`** - Full-width image sections
- **`PortfolioImageSidebarSection`** - Image with sidebar text (like sketches)
- **`PortfolioImageGridSection`** - Grid of images (2, 3, or 4 columns)

### Data Structure

Projects are defined using the `PortfolioProjectData` interface:

```typescript
interface PortfolioProjectData {
  hero: {
    image: { src: string; alt: string };
    title: string;
    subtitle: string;
  };
  summary: {
    title: string;
    content: string;
  };
  sections: PortfolioSection[];
}
```

### Section Types

1. **`text-only`** - For reflections, outcomes, etc.
2. **`image-text`** - Side-by-side layout with paragraphs
3. **`full-image`** - Full-width images like mood boards
4. **`image-with-sidebar`** - Image with description sidebar
5. **`image-grid`** - Grid of multiple images

## Creating a New Portfolio Page

### Step 1: Create Data File

Create a new file in `/src/data/portfolio/your-project.ts`:

```typescript
import { PortfolioProjectData } from '@/components/portfolio/types';

export const yourProjectData: PortfolioProjectData = {
  hero: {
    image: {
      src: '/path/to/hero-image.jpg',
      alt: 'Your Project Hero'
    },
    title: 'Your Project Name',
    subtitle: 'Brief project description'
  },
  summary: {
    title: 'Project Summary',
    content: 'Detailed project description...'
  },
  sections: [
    // Add your sections here
  ]
};
```

### Step 2: Create Page Component

Create `/src/app/portfolio/your-project/page.tsx`:

```typescript
import { PortfolioLayout } from '@/components/portfolio';
import { yourProjectData } from '@/data/portfolio/your-project';

export default function YourProjectPage() {
  return (
    <PortfolioLayout 
      projectData={yourProjectData} 
      currentPath="/portfolio" 
    />
  );
}
```

### Step 3: Section Examples

```typescript
// Text-only section
{
  id: 'outcomes',
  title: 'Project Outcomes',
  type: 'text-only',
  content: {
    text: 'Your reflection text here...'
  }
}

// Image-text section
{
  id: 'process',
  title: 'Design Process',
  type: 'image-text',
  content: {
    image: { src: '/process.jpg', alt: 'Design Process' },
    paragraphs: [
      'First paragraph...',
      'Second paragraph...'
    ],
    layout: 'image-left', // or 'image-right'
    imageHeight: 'h-64' // h-64, h-80, h-96, h-128
  }
}

// Full-width image
{
  id: 'moodboard',
  title: 'Mood Board',
  type: 'full-image',
  content: {
    image: { src: '/moodboard.jpg', alt: 'Mood Board' },
    imageHeight: 'h-128'
  }
}

// Image with sidebar
{
  id: 'sketches',
  title: 'Sketches',
  type: 'image-with-sidebar',
  content: {
    image: { src: '/sketches.jpg', alt: 'Sketches' },
    sidebarContent: 'Description of sketches...',
    imageHeight: 'h-64'
  }
}

// Image grid
{
  id: 'final-designs',
  title: 'Final Designs',
  type: 'image-grid',
  content: {
    images: [
      { src: '/design1.jpg', alt: 'Design 1' },
      { src: '/design2.jpg', alt: 'Design 2' }
    ],
    gridColumns: 2, // 2, 3, or 4
    imageHeight: 'h-80'
  }
}
```

## Styling Features

- **Consistent shadows**: All images use `shadow-lg`
- **Hover effects**: Images scale slightly on hover
- **Responsive grids**: Automatically adapt to different screen sizes
- **Flexible heights**: Choose from h-64, h-80, h-96, h-128
- **Consistent spacing**: Standardized margins and padding

## Example Usage

See `/src/data/portfolio/book-people.ts` and `/src/data/portfolio/template.ts` for complete examples.

The Book People project demonstrates all section types in action, while the template provides a starting structure for new projects.