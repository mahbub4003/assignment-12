/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
      },
    ],
  },
};

module.exports = nextConfig;
