import type { NextConfig } from "next";
import { turborepoTraceAccess } from "next/dist/build/turborepo-access-trace";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
