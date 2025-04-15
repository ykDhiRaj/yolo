import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  images: {
    domains: [
      'images.unsplash.com',
      'i.imgur.com'
    ]
  },
};

export default nextConfig;
