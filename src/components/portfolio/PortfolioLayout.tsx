import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { commonContent } from '@/data/common-content';
import PortfolioHero from './PortfolioHero';
import PortfolioTextSection from './PortfolioTextSection';
import PortfolioImageTextSection from './PortfolioImageTextSection';
import PortfolioFullImageSection from './PortfolioFullImageSection';
import PortfolioImageSidebarSection from './PortfolioImageSidebarSection';
import PortfolioImageGridSection from './PortfolioImageGridSection';
import PortfolioPDFHorizontalViewerSection from './PortfolioPDFViewerSection';
import { PortfolioProjectData, PortfolioSection } from './types';
import { ASSET_PREFIX } from '@/utils/constants';
import PortfolioFigmaPrototype from './PortfolioFigmaPrototype';

interface PortfolioLayoutProps {
  projectData: PortfolioProjectData;
  currentPath: string;
}

export default function PortfolioLayout({
  projectData,
  currentPath,
}: PortfolioLayoutProps) {
  const { profile, navigation } = commonContent;

  const renderSection = (section: PortfolioSection) => {
    switch (section.type) {
      case 'text-only':
        return (
          <PortfolioTextSection
            key={section.id}
            title={section.title}
            content={section.content.text || ''}
            titleSize={section.content.titleSize}
          />
        );

      case 'image-text':
        return (
          <PortfolioImageTextSection
            key={section.id}
            title={section.title}
            image={section.content.image!}
            paragraphs={section.content.paragraphs || []}
            layout={section.content.layout}
            imageHeight={section.content.imageHeight}
            titleSize={section.content.titleSize}
          />
        );

      case 'full-image':
        return (
          <PortfolioFullImageSection
            key={section.id}
            title={section.title}
            image={section.content.image!}
            imageHeight={section.content.imageHeight}
            titleSize={section.content.titleSize}
            className={section.content.className}
            imageClass={section.content.imageClass}
          />
        );

      case 'image-with-sidebar':
        return (
          <PortfolioImageSidebarSection
            key={section.id}
            title={section.title}
            image={section.content.image!}
            sidebarContent={section.content.sidebarContent || ''}
            imageHeight={section.content.imageHeight}
            titleSize={section.content.titleSize}
          />
        );

      case 'image-grid':
        return (
          <PortfolioImageGridSection
            key={section.id}
            title={section.title}
            images={section.content.images || []}
            gridColumns={section.content.gridColumns}
            imageHeight={section.content.imageHeight}
            titleSize={section.content.titleSize}
            text={section.content.text}
            textPosition={section.content.textPosition}
            gridClass={section.content.className}
            imageClass={section.content.imageClass}
          />
        );

      case 'pdf-viewer':
        return (
          <PortfolioPDFHorizontalViewerSection
            key={section.id}
            title={section.title}
            pdfSrc={section.content.pdfSrc!}
            showDownload={section.content.showDownload ?? true}
            className={section.content.className}
            // optional tweaks:
            // maxWidth="max-w-4xl"
            // viewerHeight={680}
          />
      case 'figma-prototype':
        return (
          <PortfolioFigmaPrototype
            key={section.id}
            title={section.title}
            figmaSrc={section.content.figmaSrc || ''}
            titleSize={section.content.titleSize}
            className={section.content.className}
            imageClass={section.content.imageClass}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        navigation={navigation}
        siteName={profile.name}
        current={currentPath}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-[70%] md:max-w-5xl mx-auto">
          <PortfolioHero
            image={projectData.hero.image}
            title={projectData.hero.title}
            subtitle={projectData.hero.subtitle}
            imageClass={projectData.hero.imageClass}
          />

          <PortfolioTextSection
            title={projectData.summary.title}
            content={projectData.summary.content}
          />

          {projectData.sections.map(renderSection)}
        </div>
      </main>

      <Footer profile={profile} />
    </div>
  );
}
