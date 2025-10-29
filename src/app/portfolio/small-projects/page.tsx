import { PortfolioLayoutMinimal } from '@/components/portfolio';
import { smallProjectsData } from '@/data/portfolio/small-projects';

export default function TemplatePage() {
  return (
    <PortfolioLayoutMinimal
      projectData={smallProjectsData}
      currentPath="/portfolio"
      projectId="small-projects"
    />
  );
}
