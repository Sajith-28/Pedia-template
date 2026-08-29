import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Template photography is served from Unsplash. Replace these with local
    // files in /public (or your own CDN host) when the real assets land.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    // 68 is used for the large hero portrait; 75 is the Next default.
    qualities: [68, 75],
  },
};

export default nextConfig;
