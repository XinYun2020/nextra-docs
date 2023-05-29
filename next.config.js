/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

// module.exports = withNextra(nextConfig);
module.exports = withNextra({
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
});
