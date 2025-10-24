import { PortfolioLayout } from '@/components/portfolio';
import { numiPackagingProjectData } from '@/data/portfolio/numi-packaging';

export default function NumiPackagingPage() {
  return (
    <PortfolioLayout
      projectData={numiPackagingProjectData}
      currentPath="/portfolio/numi-packaging"
    />
  );
}
