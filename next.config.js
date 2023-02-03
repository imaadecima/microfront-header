const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  distDir: 'build',
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'fe1',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './header': './components/Header.tsx',
        },
      })
    )

    return config
  },
}
