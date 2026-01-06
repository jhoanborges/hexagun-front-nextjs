// next.config.mjs
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bucket.hexagun.mx",
      },
      {
        protocol: "https",
        hostname: "download.odoocdn.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
