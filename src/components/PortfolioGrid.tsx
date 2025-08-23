'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ProjectItem } from '@/data/types';

interface PortfolioGridProps {
  title: string;
  projects: ProjectItem[];
}

export default function PortfolioGrid({ title, projects }: PortfolioGridProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group block relative aspect-square overflow-hidden bg-gray-100 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Overlay with project info */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                {project.category && (
                  <p className="text-sm text-gray-300">{project.category}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
