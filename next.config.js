
const isProduction = process.env.NODE_ENV === 'production'
const name = 'nextjs-paper'
const path = require('path');

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: isProduction ? `/${name}/` : '',
  basePath: isProduction ? `/${name}` : '',
  images: {
    loader: 'akamai',
    path: '',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    },)
    return config
  },
}