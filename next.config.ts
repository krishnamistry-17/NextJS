import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "encrypted-tbn0.gstatic.com" }],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
