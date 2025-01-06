import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: "dist",
  trailingSlash: true,
  assetPrefix: '.',
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    loader: 'default',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000'  
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '5500'  
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
