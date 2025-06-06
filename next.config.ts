import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "encrypted-tbn0.gstatic.com" }],
  },
  env: {
    GITHUB_ID: "Ov23liKvUviBny8Dh2W5",
    GITHUB_SECRET: "f946b66003a4827bec80eada8a003b4e7e2b96f7",
  },
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
