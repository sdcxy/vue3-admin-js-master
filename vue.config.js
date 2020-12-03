// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/style.scss";`
      }
    }
  }
}