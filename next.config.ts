import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    loader: 'default',
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
