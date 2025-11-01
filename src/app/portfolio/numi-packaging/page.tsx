import { PortfolioLayout } from '@/components/portfolio';
import { numiPackagingProjectData } from '@/data/portfolio';

export default function NumiPackagingPage() {
  return (
    <PortfolioLayout
      projectData={numiPackagingProjectData}
      currentPath="/portfolio"
      projectId="numi-packaging"
    />
  );
}
