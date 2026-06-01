import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://rachnaparakh.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/portfolio/book-people`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/fallout-theater`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/jaipur-campaign`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/jmb-booklet`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/numi-packaging`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/personal-projects`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/rasa-label`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/small-projects`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/tree-to-cup`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio/tress`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ];
}
