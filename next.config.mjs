// next.config.mjs

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bucket.hexagun.mx',
        },
      ],
    },
  };
  
  export default nextConfig;