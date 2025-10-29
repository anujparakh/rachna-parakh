'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { commonContent } from '@/data/common-content';
import PortfolioTextSection from './PortfolioTextSection';
import PortfolioImageTextSection from './PortfolioImageTextSection';
import PortfolioFullImageSection from './PortfolioFullImageSection';
import PortfolioImageSidebarSection from './PortfolioImageSidebarSection';
import PortfolioImageGridSection from './PortfolioImageGridSection';
import PortfolioNavigation from './PortfolioNavigation';
import { MinimalPortfolioProjectData, PortfolioSection } from './types';

interface PortfolioLayoutMinimalProps {
  projectData: MinimalPortfolioProjectData;
  currentPath: string;
  projectId: string;
}

export default function PortfolioLayoutMinimal({
  projectData,
  currentPath,
  projectId,
}: PortfolioLayoutMinimalProps) {
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
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-semibold text-foreground">
              {projectData.hero.title}
            </h1>
            {projectData.hero.subtitle && (
              <p className="mt-2 text-lg text-muted-foreground">
                {projectData.hero.subtitle}
              </p>
            )}
          </div>

          {/* Intentionally omit summary section for minimal layout */}

          {projectData.sections.map(renderSection)}

          <PortfolioNavigation currentProjectId={projectId} />
        </div>
      </main>

      <Footer profile={profile} />
    </div>
  );
}
