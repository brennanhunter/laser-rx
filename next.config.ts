import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false
};

export default nextConfig;
