'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { NavigationItem } from '@/data/types';
import { ASSET_PREFIX } from '@/utils/constants';

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
    <header className="sticky top-0 z-50 bg-header-background py-6 border-b-[0.1px] border-primary backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-row gap-5">
            <img src={ASSET_PREFIX + '/logo-v1.svg'} className="w-10 aspect-square" />
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
