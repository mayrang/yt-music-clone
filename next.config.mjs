/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.unsplash.com" }],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
