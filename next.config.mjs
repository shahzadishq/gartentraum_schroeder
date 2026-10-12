/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages the site is served from a sub-path
// (e.g. /gartentraum_schroeder). The Pages workflow passes that path via
// NEXT_PUBLIC_BASE_PATH; locally it is empty so dev/preview work from root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site (out/) so it can be hosted on GitHub Pages.
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimizer – serve images as-is.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
