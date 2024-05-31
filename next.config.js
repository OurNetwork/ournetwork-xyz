/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    serverMinification: false,
  },
  redirects: async () => {
    return [
      {
        source: "/latest",
        destination: "https://ournetwork.xyz",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
