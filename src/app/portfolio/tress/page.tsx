import { PortfolioLayout } from '@/components/portfolio';
import { tressProjectData } from '@/data/portfolio/tress';

export default function TressPage() {
  return (
    <PortfolioLayout
      projectData={tressProjectData}
      currentPath="/portfolio/tress"
    />
  );
}
