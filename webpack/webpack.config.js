/**
 * Created by lenovo on 2017/12/19.
 */


const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除dist不用得文件
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
const config = {
        entry: {
            app: './src/index.js',//入口文件
            print: './src/print.js'//入口文件
        },
        output: {
            filename: '[name].min.js',//输出文件名 【name】动态文件名设置
            path: path.resolve(__dirname + '/dist'),//输出文件得地址
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management'//输出文件html
            }),
            new CleanWebpackPlugin([
                'dist'//清除dist旧的文件
            ]),
            new webpack.HotModuleReplacementPlugin(),//热替换
            new webpack.optimize.UglifyJsPlugin({//输出文件压缩
                sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ],
        devtool: 'inline-source-map',//标记错误文件得地图
        devServer: {
            contentBase: './dist',//把dist在服务器内加载
            hot: true//启动热替换
        },
        module: {
            rules: [
                {
                    test: /\.css$/,//处理所有得css文件用下面得加载器
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,//处理所有得IMG文件
                    use: [
                        'file-loader',
                        'image-webpack-loader',
                        // 'url-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,//处理所有得字体文件
                    use: [
                        'file-loader'//处理字体文件
                    ]
                },
                {
                    test: /\.(xml$)/,//处理编译所有得xml文件
                    use: ['xml-loader']
                }
            ]
        }
    }
;
module.exports = config;