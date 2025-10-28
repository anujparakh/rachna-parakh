import Link from 'next/link';
import { homepageContent } from '@/data/homepage-content';

interface PortfolioNavigationProps {
  currentProjectId: string;
}

export default function PortfolioNavigation({
  currentProjectId,
}: PortfolioNavigationProps) {
  const projects = homepageContent.portfolioSection.projects;
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProjectId
  );

  if (currentIndex === -1) {
    return null;
  }

  const previousProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  return (
    <div className="flex justify-between items-center mt-16 py-8 border-t border-gray-200">
      <Link
        href={previousProject.link}
        className="flex items-center text-gray-600 hover:text-primary transition-colors"
      >
        <span className="mr-2 text-primary">←</span>
        <div>
          <div className="text-sm ">Previous</div>
          <div className="font-medium">{previousProject.title}</div>
        </div>
      </Link>

      <Link
        href={nextProject.link}
        className="flex items-center text-gray-600 hover:text-primary transition-colors text-right"
      >
        <div>
          <div className="text-sm ">Next</div>
          <div className="font-medium">{nextProject.title}</div>
        </div>
        <span className="ml-2 text-primary">→</span>
      </Link>
    </div>
  );
}
