import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Set basePath for GitHub Pages deployment (username.github.io/repo-name)
  basePath: "/sivarsa",
  assetPrefix: "/sivarsa/",
};

export default nextConfig;
