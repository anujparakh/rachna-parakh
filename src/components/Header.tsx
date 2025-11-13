'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { NavigationItem } from '@/data/types';
import { ASSET_PREFIX } from '@/utils/constants';
import HeaderLogo from '@img/logo-v1.svg';
import Image from 'next/image';

interface HeaderProps {
  navigation: NavigationItem[];
  siteName: string;
  current?: string;
}

export default function Header({
  navigation,
  siteName,
  current = '/',
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-header-background py-3 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-row gap-5">
            <Image
              src={HeaderLogo}
              alt="Rachna Parakh Logo"
              className="w-12 aspect-square hover:brightness-75"
            />
            {/* <img src={ASSET_PREFIX + '/rachna-text.svg'} className="h-10 w-auto" /> */}
            {/* <h1 className="text-2xl md:text-3xl font-extralight text-gray-900 tracking-wide text-primary transition-colors duration-200">
              {siteName}
            </h1> */}
          </Link>
          <Navigation items={navigation} currentPath={current} />
        </div>
      </div>
    </header>
  );
}
