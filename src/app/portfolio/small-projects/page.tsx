import { PortfolioLayout } from '@/components/portfolio';
import { smallProjectsData } from '@/data/portfolio/small-projects';

export default function TemplatePage() {
  return (
    <PortfolioLayout
      projectData={smallProjectsData}
      currentPath="/portfolio"
      projectId="small-projects"
    />
  );
}
