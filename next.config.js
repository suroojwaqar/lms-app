/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { message: /Critical dependency: the request of a dependency is an expression/ },
      { module: /punycode/ },
    ];
    return config;
  },
};

module.exports = nextConfig;
