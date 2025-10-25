export interface ImageData {
  src: string;
  alt: string;
}

export interface PortfolioProjectData {
  hero: {
    image: ImageData;
    title: string;
    subtitle: string;
    imageClass?: string;
  };
  summary: {
    title: string;
    content: string;
  };
  sections: PortfolioSection[];
}

export interface PortfolioSection {
  id: string;
  title: string;
  type:
    | 'image-text'
    | 'full-image'
    | 'image-with-sidebar'
    | 'image-grid'
    | 'text-only';
  content: SectionContent;
}

export interface SectionContent {
  image?: ImageData;
  images?: ImageData[];
  text?: string;
  paragraphs?: string[];
  description?: string;
  gridColumns?: 1 | 2 | 3 | 4;
  imageHeight?: 'h-64' | 'h-80' | 'h-96' | 'h-128' | 'auto';
  layout?: 'image-left' | 'image-right';
  sidebarContent?: string;
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  textPosition?: 'above' | 'below';
  className?: string;
  imageClass?: string;
}
