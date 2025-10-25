import { PortfolioLayout } from '@/components/portfolio';
import { jmbBookletProjectData } from '@/data/portfolio/jmb-booklet';

export default function JMBBookletPage() {
  return (
    <PortfolioLayout
      projectData={jmbBookletProjectData}
      currentPath="/portfolio"
    />
  );
}
