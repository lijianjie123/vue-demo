'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
		env: require('./dev.env'),
		host:'localhost',
		port: 8080,
		autoOpenBrowser: true,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',

		// proxy跨域的时候使用的接口代理
		//修改过proxyTable  后重启服务器 npm run dev  就好了
		proxyTable: {
// 			'/proxy': {
// 				target: 'http://m.kugou.com', //目标接口域名
// 				changeOrigin: true,  // 是否跨域
// 				pathRewrite: {
// 					'^/proxy': ''  // 重写接口
//         		}
// // https://blog.csdn.net/jikangjian/article/details/80798677  如下参考地址
// //         pathRewrite: {
// //           '^/api': '/api'   // 这种接口配置出来     http://XX.XX.XX.XX:8080/api/login
// //           '^/api': '/'         这种接口配置出来     http://XX.XX.XX.XX:8080/login
// //         }

// 			},
// 			'/aproxy': {
// 				target: 'http://mobilecdn.kugou.com',
// 				changeOrigin: true,
// 				pathRewrite: {
// 					'^/aproxy': ''
// 				}
// 			},
// 			'/bproxy': {
// 				target: 'http://www.kugou.com',
// 				changeOrigin: true,
// 				pathRewrite: {
// 					'^/bproxy': ''
// 				}
// 			}
		},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false
	},

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
