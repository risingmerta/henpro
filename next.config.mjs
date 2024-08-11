/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static-assets-44d.pages.dev', 'static-assets.freeanimehentai.net', 'hentai.tv'], // Add your domain here
  },
  eslint: {
    ignoreDuringBuilds: true, // This will disable ESLint during the build process
  },
};

export default nextConfig;
