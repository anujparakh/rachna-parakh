import { PortfolioLayout } from '@/components/portfolio';
import { templateProjectData } from '@/data/portfolio/template';

export default function NumiPackagingPage() {
  return (
    <PortfolioLayout
      projectData={templateProjectData}
      currentPath="/portfolio"
    />
  );
}
