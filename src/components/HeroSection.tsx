'use client';

import Image from 'next/image';
import { ProfileContent } from '@/data/types';
import LinkButton from './LinkButton';

interface HeroSectionProps {
  profile: ProfileContent;
  ctaButtonText: string;
  ctaButtonHref: string;
}

export default function HeroSection({
  profile,
  ctaButtonText,
  ctaButtonHref,
}: HeroSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 flex justify-center">
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={profile.profileImage.src}
              alt={profile.profileImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </div>
        {/* Content Column */}
        <div className="order-2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-heading mb-4 leading-tight">
            Hi! I&apos;m {profile.name}
          </h1>

          <p className="text-lg md:text-xl text-body mb-8 leading-relaxed font-thin">
            {profile.bio}
          </p>

          <LinkButton href={ctaButtonHref}>{ctaButtonText}</LinkButton>
        </div>
      </div>
    </section>
  );
}
