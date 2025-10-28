import { PortfolioLayout } from '@/components/portfolio';
import { treeToCup } from '@/data/portfolio';

export default function TreeToCupPage() {
  return (
    <PortfolioLayout
      projectData={treeToCup}
      currentPath="/portfolio"
      projectId="tree-to-cup"
    />
  );
}
