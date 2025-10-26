import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configure for GitHub Pages subdirectory deployment
  basePath: process.env.GITHUB_PAGES === 'true' ? '/rachna-parakh' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/rachna-parakh' : '',

  // GitHub Pages uses static export
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
};

export default nextConfig;
