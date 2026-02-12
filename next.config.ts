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
  async rewrites() {
    return [
      {
        source: "/apply-now",
        destination: "/apply-now/index.html",
      },
      {
        source: "/apply-now/btech",
        destination: "/apply-now/btech/index.html",
      },
      {
        source: "/apply-now/mba",
        destination: "/apply-now/mba/index.html",
      },
      {
        source: "/placement/apply",
        destination: "/admissions/apply",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
