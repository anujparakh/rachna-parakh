import { PortfolioLayout } from '@/components/portfolio';
import { falloutTheaterProjectData } from '@/data/portfolio/fallout-theater';

export default function FalloutTheaterPage() {
  return (
    <PortfolioLayout
      projectData={falloutTheaterProjectData}
      currentPath="/portfolio"
      projectId="fallout-theater"
    />
  );
}
