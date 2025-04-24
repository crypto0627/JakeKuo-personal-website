/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages specific configuration
  output: 'export',
  experimental: {
    // Disable optimized CSS handling to fix critters module error
    optimizeCss: false,
  },
  // Enable compression for better performance
  compress: true,
  // Enable production source maps for debugging
  productionBrowserSourceMaps: true,
  // Configure webpack for better optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure client-side optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
}

export default nextConfig
