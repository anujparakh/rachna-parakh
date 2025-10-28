import { PortfolioLayout } from '@/components/portfolio';
import { templateProjectData } from '@/data/portfolio/template';

export default function TemplatePage() {
  return (
    <PortfolioLayout
      projectData={templateProjectData}
      currentPath="/portfolio"
      projectId="template"
    />
  );
}
