/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Ostad", value: "Next1" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
