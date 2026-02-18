/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-cdn.jtvnw.net"
      },
      {
        protocol: "https",
        hostname: "cdn.jtvnw.net"
      }
    ]
  }
};

export default nextConfig;