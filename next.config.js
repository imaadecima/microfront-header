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
          './section': './components/Section.jsx',
        },
        extraOptions: {
          exposePages: true, // `false` by default
          enableImageLoaderFix: true, // `false` by default
          enableUrlLoaderFix: true, // `false` by default
          automaticAsyncBoundary: true, // `false` by default
          skipSharingNextInternals: false, // `false` by default
        },
      })
    )

    return config
  },
}
