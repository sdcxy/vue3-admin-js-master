// vue.config.js
module.exports = {
  // 配置项
  // 配置入口路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 配置输出文件路径
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  // css样式loader
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/style.scss";`
      }
    }
  }
}