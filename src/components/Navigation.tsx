'use client';

import Link from 'next/link';
import { NavigationItem } from '@/data/types';

interface NavigationProps {
  items: NavigationItem[];
  currentPath?: string;
}

export default function Navigation({
  items,
  currentPath = '/',
}: NavigationProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            font-medium tracking-wide transition-colors duration-200
            ${
              currentPath === item.href
                ? 'text-header-link border-b border-header-link hover:cursor-default'
                : 'text-header-link hover:text-primary hover:border-b'
            }
          `}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
