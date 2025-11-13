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
      <h2 className="text-3xl md:text-4xl font-medium text-heading text-center mb-12 w-[80%] m-auto">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <Link
              href={project.link}
              className="group block relative aspect-square overflow-hidden bg-gray-100 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
                // placeholder="blur"
              />

              {/* Overlay with project info - hidden on touch screens */}
              <div className="absolute inset-0 hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="font-semibold text-xl md:text-2xl mb-1 ">
                    {project.title}
                  </p>
                  {project.category && (
                    <p className="text-lg text-gray-300">{project.category}</p>
                  )}
                </div>
              </div>
            </Link>

            {/* Subtitle for touch screens - visible on all touch devices including iPad Pro */}
            <div className="mt-2 text-center [@media(hover:hover)]:hidden">
              <p className="font-medium font-fraunces text-sm text-heading">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
