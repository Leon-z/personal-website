'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin') // 压缩js
const MinifyPlugin = require('babel-minify-webpack-plugin') // 压缩js
const {CommonsChunkPlugin} = webpack.optimize; // 压缩js
const CompressionWebpackPlugin = require('compression-webpack-plugin');//gzip 压缩
// Add needed plugins here

let config = Object.assign({}, baseConfig, {
    entry: {
        main: './src/index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router','react-router-dom']
    },
    // entry: path.join(__dirname, '../src/index'),
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        publicPath: defaultSettings.publicPath
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new CommonsChunkPlugin({
            name: "vendor",
            filename: 'js/[name].[chunkhash:8].chunk.js'
        }),
        new CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity,
            filename: 'js/[name].[chunkhash:8].chunk.js'
        }),
        new MinifyPlugin(),
        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body' // Inject all scripts into the body
        }),

    ],
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
// config.module.loaders.push({
//     test: /\.(js|jsx)$/,
//     loader: 'babel',
//     include: [].concat(
//         config.additionalPaths,
//         [path.join(__dirname, '/../src')]
//     )
// });

module.exports = config;
