'use client';

import Link from 'next/link';
import { ProfileContent } from '@/data/types';

interface FooterProps {
  profile: ProfileContent;
}

export default function Footer({ profile }: FooterProps) {
  return (
    <footer className="bg-footer-background py-6 mt-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Link
          href="/"
          className="text-2xl font-light font-fraunces text-primary mb-6 block hover:text-primary-dark transition-colors duration-200"
        >
          {profile.name}
        </Link>

        <div className="flex justify-center space-x-6 mb-6">
          {/* Removed Instagram for Now */}
          {/* {profile.socialLinks.instagram && (
            <Link
              href={profile.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-link hover:text-primary transition-colors duration-200"
            >
              Instagram
            </Link>
          )} */}
          {profile.socialLinks.linkedin && (
            <Link
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-link hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </Link>
          )}
          {profile.socialLinks.email && (
            <Link
              href={`mailto:${profile.socialLinks.email}`}
              className="text-footer-link hover:text-primary transition-colors duration-200"
            >
              Email
            </Link>
          )}
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
