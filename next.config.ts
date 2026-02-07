import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "shivalikcollege.edu.in",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/placement/apply",
        destination: "/admissions/apply",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
