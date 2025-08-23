'use client';

import Navigation from '@/components/Navigation';
import { NavigationItem } from '@/data/types';

interface HeaderProps {
  navigation: NavigationItem[];
  siteName: string;
}

export default function Header({ navigation, siteName }: HeaderProps) {
  return (
    <header className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
            {siteName}
          </h1>
          <Navigation items={navigation} />
        </div>
      </div>
    </header>
  );
}
