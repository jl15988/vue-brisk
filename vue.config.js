const {defineConfig} = require('@vue/cli-service')
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            // 修改项目入口文件
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展webpack配置，使packages加入编译
    // 高版本js语法转为低版本
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项
                return options;
            });
    },
    // configureWebpack: {
    //     plugins: [
    //         new CompressionPlugin({
    //             algorithm: 'gzip', // 使用gzip压缩
    //             test: /\.js$|\.html$|\.css$/, // 匹配文件名
    //             filename: '[path][base].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
    //             minRatio: 0.8, // 压缩率小于1才会压缩
    //             threshold: 10240, // 对超过10k的数据压缩
    //             deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
    //         }),
    //     ]
    // },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "@/assets/scss/params.scss";`
    //         }
    //     }
    // },
})
