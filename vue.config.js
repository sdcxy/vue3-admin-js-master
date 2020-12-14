const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

// vue.config.js
module.exports = {
  // 配置项
  // 配置入口路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 配置输出文件路径
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  // lint校验代码
  lintOnSave: false,
  // css样式loader
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/style.scss";`
      }
    }
  },
  chainWebpack: config => { 
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();

  }
}