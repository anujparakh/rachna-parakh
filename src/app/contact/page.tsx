import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { commonContent } from '@/data/common-content';

export default function ContactPage() {
  const { profile, navigation } = commonContent;

  return (
    <div className="min-h-screen bg-background">
      <Header
        navigation={navigation}
        siteName={profile.name}
        current="/contact"
      />

      <main>
        <ContactForm
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your vision to life."
        />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
