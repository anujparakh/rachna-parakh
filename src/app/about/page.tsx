import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import PhilosophySection from '@/components/PhilosophySection';
import Footer from '@/components/Footer';
import { aboutContent } from '@/data/about-content';

export default function AboutPage() {
  const { profile, navigation, aboutSection, philosophySection } = aboutContent;

  return (
    <div className="min-h-screen bg-background">
      <Header
        navigation={navigation}
        siteName={profile.name}
        current="/about"
      />

      <main>
        <AboutSection
          title={aboutSection.title}
          subtitle={aboutSection.subtitle}
          paragraphs={aboutSection.paragraphs}
          aboutImage={aboutSection.aboutImage}
          ctaButton={aboutSection.ctaButton}
        />

        <PhilosophySection
          title={philosophySection.title}
          items={philosophySection.items}
        />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
