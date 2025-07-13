import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  basePath: isDev ? '' : '/yvnk',
  assetPrefix: isDev ? '' : '/yvnk',
  output: 'export',
};

export default nextConfig;
