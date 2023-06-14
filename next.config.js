/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compilerOptions: {
    noImplicitAny: false,
  },
};

module.exports = nextConfig;
