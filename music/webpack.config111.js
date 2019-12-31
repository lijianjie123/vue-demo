var path = require('path')
var webpack = require('webpack')

module.exports = {
    /// 这个文件要做打包，从哪一个文件开始打包
    entry:'./src/main.js',
    // 打包文件要放到哪里去，就配置在output这个对象里
    output:{
        /**
　　　　* 打包出的文件要把他放到哪一个文件夹下，path后面要放一个绝对路径
　　　　* __dirname指的是webpack.config.js所在的当前目录的这个路径
　　　　* 下面这个结合就是一个绝对路径
　　　　*/
        path:path.resolve(__dirname, './dist'),
        publicPath:'/vue-my/dist/',
        // 打包好的文件名字
        filename: 'build.js'
    }
}