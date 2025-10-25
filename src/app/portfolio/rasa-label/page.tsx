import { PortfolioLayout } from '@/components/portfolio';
import { rasaLabelProjectData } from '@/data/portfolio/rasa-label';

export default function RasaLabelPage() {
  return (
    <PortfolioLayout
      projectData={rasaLabelProjectData}
      currentPath="/portfolio"
    />
  );
}
