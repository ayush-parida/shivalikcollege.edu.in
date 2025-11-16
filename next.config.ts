import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shivalikcollege.edu.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
