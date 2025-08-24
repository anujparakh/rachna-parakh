import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import Footer from '@/components/Footer';
import { homepageContent } from '@/data/homepage-content';

export default function Home() {
  const { profile, navigation, portfolioSection, ctaButton } = homepageContent;

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={navigation} siteName={profile.name} />

      <main>
        <HeroSection
          profile={profile}
          ctaButtonText={ctaButton.text}
          ctaButtonHref={ctaButton.href}
        />

        <PortfolioGrid
          title={portfolioSection.title}
          projects={portfolioSection.projects}
        />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
