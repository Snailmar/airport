/*
 * @Author: vigorzhang
 * @Date: 2019-11-13 09:05:18
 * @LastEditors  : vigorzhang
 * @LastEditTime : 2019-12-19 09:02:06
 * @Description: 
 */
const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    // publicPath: process.env.NODE_ENV === "development" ? './' : '/airport/', // 公共路径
  
    publicPath:process.env.NODE_ENV === "development" ? './' : '/airport/',
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'airport', // 不同的环境打不同包名
    lintOnSave: false, // 关闭eslint
    productionSourceMap: true, // 生产环境下css 分离文件
    devServer: { // 配置服务器
        sockHost: 'localhost',
        port: 8081,
        open: true,
        // https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        disableHostCheck: true,
        //跨域设置
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.100.31:8091', //要代理的后台地址
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|\.css$/,
    //                     threshold: 10240,
    //                     deleteOriginalAssets: false
    //                 })
    //             ]
    //         }
    //     }
    // },
    // css: {
    //     //extract: true, //是否使用css分离插件extraTextPlugin生产环境下是true,开发为false
    //     sourceMap: false,
    //     loaderOptions: {},
    //     modules: false
    // },
    // chainWebpack: config => {
    //     // 修复HMR
    //     config.resolve.symlinks(true);

    // }
}