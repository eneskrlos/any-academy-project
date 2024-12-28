import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    loader: 'default',
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000'  
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
