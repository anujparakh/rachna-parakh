import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProfileContent {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  bio: string;
  profileImage: {
    src: StaticImport;
    alt: string;
  };
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  description?: string;
  image: {
    src: StaticImport;
    alt: string;
  };
  link: string;
  category?: string;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}

export interface CommonContent {
  profile: ProfileContent;
  navigation: NavigationItem[];
}

export interface HomepageContent extends CommonContent {
  portfolioSection: {
    title: string;
    projects: ProjectItem[];
  };
  ctaButton: {
    text: string;
    href: string;
  };
}

export interface AboutContent extends CommonContent {
  aboutSection: {
    title: string;
    subtitle?: string;
    paragraphs: string[];
    aboutImage: {
      src: StaticImport;
      alt: string;
    };
    ctaButton: {
      text: string;
      href: string;
    };
  };
  philosophySection: {
    title: string;
    items: PhilosophyItem[];
  };
}
