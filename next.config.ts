import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ynugen.github.io",
  assetPrefix: "/ynugen.github.io/",
};

export default nextConfig;
