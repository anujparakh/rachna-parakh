'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { NavigationItem } from '@/data/types';

interface HeaderProps {
  navigation: NavigationItem[];
  siteName: string;
}

export default function Header({ navigation, siteName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-header-background py-6 border-b border-gray-100 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide hover:text-primary transition-colors duration-200">
              {siteName}
            </h1>
          </Link>
          <Navigation items={navigation} />
        </div>
      </div>
    </header>
  );
}
