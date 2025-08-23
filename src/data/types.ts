export interface ProfileContent {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  bio: string;
  profileImage: {
    src: string;
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
    src: string;
    alt: string;
  };
  link: string;
  category?: string;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export interface HomepageContent {
  profile: ProfileContent;
  navigation: NavigationItem[];
  portfolioSection: {
    title: string;
    projects: ProjectItem[];
  };
  ctaButton: {
    text: string;
    href: string;
  };
}
