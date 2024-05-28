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
      // {
      //   source: "/p/:slug",
      //   destination: "https://ournetwork.substack.com/p/:slug",
      //   permanent: false,
      //   basePath: false,
      // },
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
