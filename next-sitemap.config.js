const config = {
  siteUrl: "https://www.ournetwork.xyz",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/disclosures" },
      { userAgent: "*", disallow: "/about" },
    ],
  },
};

module.exports = config;
