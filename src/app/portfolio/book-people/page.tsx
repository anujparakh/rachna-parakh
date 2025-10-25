import { PortfolioLayout } from '@/components/portfolio';
import { bookPeopleProjectData } from '@/data/portfolio/book-people';

export default function BookPeoplePage() {
  return (
    <PortfolioLayout
      projectData={bookPeopleProjectData}
      currentPath="/portfolio"
    />
  );
}
