import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';
import { commonContent } from '@/data/common-content';
import { homepageContent } from '@/data/homepage-content';

export default function PortfolioPage() {
  const { profile, navigation } = commonContent;
  const { portfolioSection } = homepageContent;

  return (
    <div className="min-h-screen bg-background">
      <Header
        navigation={navigation}
        siteName={profile.name}
        current="/portfolio"
      />

      <main>
        <PortfolioGrid
          title={portfolioSection.title}
          projects={portfolioSection.projects}
        />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
