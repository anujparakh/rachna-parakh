import type { NextConfig } from 'next';

// Defaults to local
const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // Configure for GitHub Pages subdirectory deployment
  basePath: isProd && isGithubPages ? '/rachna-parakh' : '',
  assetPrefix: isProd && isGithubPages ? '/rachna-parakh/' : '',

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
