import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // enables static exports
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/rachna-parakh',
};

export default nextConfig;
