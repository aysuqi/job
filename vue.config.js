const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '.' : '/',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
