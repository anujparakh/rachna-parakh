import { PortfolioLayout } from '@/components/portfolio';
import { personalProjectsData } from '@/data/portfolio/personal-projects';

export default function TemplatePage() {
  return (
    <PortfolioLayout
      projectData={personalProjectsData}
      currentPath="/portfolio"
      projectId="personal-projects"
    />
  );
}
