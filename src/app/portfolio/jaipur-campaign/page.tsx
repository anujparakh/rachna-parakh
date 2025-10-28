import { PortfolioLayout } from '@/components/portfolio';
import { jaipurCampaignProjectData } from '@/data/portfolio/jaipur-campaign';

export default function JaipurCampaignPage() {
  return (
    <PortfolioLayout
      projectData={jaipurCampaignProjectData}
      currentPath="/portfolio"
      projectId="jaipur-campaign"
    />
  );
}
