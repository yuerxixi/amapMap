const path = require('path')
const targetUrl = process.env.NODE_ENV === "production" ? "http://127.0.0.1:8080" : "http://127.0.0.1:8080";
function resolve (dir) {
  return path.join(__dirname, './', dir)
}

// let baseUrl ="../h5";
let baseUrl ="./";
module.exports = {
  configureWebpack(config) {
    // ...

    config.externals = {
        'AMap': 'AMap', // 高德地图配置
        'AMapUI': 'AMapUI'
    }
},
  baseUrl: baseUrl,
  lintOnSave: true,
  outputDir:  'app',
  devServer: {
    publicPath:baseUrl
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // 为src下文件配别名，不使用相对路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('icons', resolve('src/icons'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('style', resolve('src/style'))

    /** 设置处理svg的router，使svg可直接用名称调用，无需路径 */
    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  /** 开发环境代理 */
  devServer: {
    open: true,
    proxy: {
      '/': {
        target: targetUrl,
        ws: false,
        // pathRewrite: {
        //     '^/api': '/api'
        // }
      },
    }
  }
}
