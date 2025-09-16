// next.config.mjs

const nextConfig = {
    images: {
        unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bucket.hexagun.mx',
        },
      ],
    },
  };
  
  export default nextConfig;
