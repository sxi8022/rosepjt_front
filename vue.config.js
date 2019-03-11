const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        'jquery': 'jquery/dist/jquery.slim.js'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
        'Util': 'exports-loader?Util!bootstrap/js/dist/util'
      })
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
  },
  devServer: {
    proxy: { // proxyTable 설정
      '/api': {
        target: 'http://localhost:4040',
        changeOrigin: true,
        host: '0.0.0.0'
      }
    },
    port: 4044 // CHANGE YOUR PORT HERE!
  }
}
