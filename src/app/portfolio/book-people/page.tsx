import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { commonContent } from '@/data/common-content';
import {
  HERO_IMAGE_URL,
  HERO_IMAGE_ALT,
  PROJECT_TITLE,
  PROJECT_SUBTITLE,
  SUMMARY_TITLE,
  SUMMARY_TEXT,
  RESEARCH_TITLE,
  RESEARCH_IMAGE_URL,
  RESEARCH_IMAGE_ALT,
  RESEARCH_PARAGRAPH_1,
  RESEARCH_PARAGRAPH_2,
  MOODBOARD_TITLE,
  MOODBOARD_IMAGE_URL,
  MOODBOARD_IMAGE_ALT,
  SKETCHES_TITLE,
  SKETCHES_IMAGE_URL,
  SKETCHES_IMAGE_ALT,
  SKETCHES_DESCRIPTION,
  FINAL_DESIGN_TITLE,
  FINAL_DESIGN_1_IMAGE_URL,
  FINAL_DESIGN_1_IMAGE_ALT,
  FINAL_DESIGN_2_IMAGE_URL,
  FINAL_DESIGN_2_IMAGE_ALT,
  BRAND_APPLICATIONS_TITLE,
  STOREFRONT_MOCKUP_IMAGE_URL,
  STOREFRONT_MOCKUP_IMAGE_ALT,
  BUSINESS_CARDS_MOCKUP_IMAGE_URL,
  BUSINESS_CARDS_MOCKUP_IMAGE_ALT,
  SIGNAGE_MOCKUP_IMAGE_URL,
  SIGNAGE_MOCKUP_IMAGE_ALT,
  TOTE_BAG_MOCKUP_IMAGE_URL,
  TOTE_BAG_MOCKUP_IMAGE_ALT,
  WEBSITE_MOCKUP_IMAGE_URL,
  WEBSITE_MOCKUP_IMAGE_ALT,
  BOOKMARK_MOCKUP_IMAGE_URL,
  BOOKMARK_MOCKUP_IMAGE_ALT,
  REFLECTIONS_TITLE,
  REFLECTIONS_TEXT,
} from '@/data/portfolio/book-people';

export default function BookPeoplePage() {
  const { profile, navigation } = commonContent;

  return (
    <div className="min-h-screen bg-background">
      <Header
        navigation={navigation}
        siteName={profile.name}
        current="/portfolio/book-people"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={HERO_IMAGE_URL}
              alt={HERO_IMAGE_ALT}
              className="w-full h-96 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {PROJECT_TITLE}
            </h1>
            <p className="text-xl text-muted-foreground">{PROJECT_SUBTITLE}</p>
          </div>

          {/* Summary */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {SUMMARY_TITLE}
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-center">
                {SUMMARY_TEXT}
              </p>
            </div>
          </section>

          {/* Research and Discovery */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {RESEARCH_TITLE}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={RESEARCH_IMAGE_URL}
                alt={RESEARCH_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div>
                <p className="text-muted-foreground mb-4">
                  {RESEARCH_PARAGRAPH_1}
                </p>
                <p className="text-muted-foreground">{RESEARCH_PARAGRAPH_2}</p>
              </div>
            </div>
          </section>

          {/* Mood Board */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {MOODBOARD_TITLE}
            </h3>
            <div className="mb-6">
              <img
                src={MOODBOARD_IMAGE_URL}
                alt={MOODBOARD_IMAGE_ALT}
                className="w-full h-128 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>

          {/* Sketches */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {SKETCHES_TITLE}
            </h3>
            <div className="grid grid-cols-4 gap-8 items-center">
              <div className="col-span-3">
                <img
                  src={SKETCHES_IMAGE_URL}
                  alt={SKETCHES_IMAGE_ALT}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="col-span-1">
                <p className="text-muted-foreground text-sm">
                  {SKETCHES_DESCRIPTION}
                </p>
              </div>
            </div>
          </section>

          {/* Final Design */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {FINAL_DESIGN_TITLE}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={FINAL_DESIGN_1_IMAGE_URL}
                alt={FINAL_DESIGN_1_IMAGE_ALT}
                className="w-full h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={FINAL_DESIGN_2_IMAGE_URL}
                alt={FINAL_DESIGN_2_IMAGE_ALT}
                className="w-full h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>

          {/* Mockup */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {BRAND_APPLICATIONS_TITLE}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src={STOREFRONT_MOCKUP_IMAGE_URL}
                alt={STOREFRONT_MOCKUP_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={BUSINESS_CARDS_MOCKUP_IMAGE_URL}
                alt={BUSINESS_CARDS_MOCKUP_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={SIGNAGE_MOCKUP_IMAGE_URL}
                alt={SIGNAGE_MOCKUP_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={TOTE_BAG_MOCKUP_IMAGE_URL}
                alt={TOTE_BAG_MOCKUP_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={WEBSITE_MOCKUP_IMAGE_URL}
                alt={WEBSITE_MOCKUP_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={BOOKMARK_MOCKUP_IMAGE_URL}
                alt={BOOKMARK_MOCKUP_IMAGE_ALT}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>

          {/* Reflections */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {REFLECTIONS_TITLE}
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-center">
                {REFLECTIONS_TEXT}
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer profile={profile} />
    </div>
  );
}
