'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BowerWebpackPlugin = require('bower-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');//gzip 压缩
// Add needed plugins here

let config = Object.assign({}, baseConfig, {
    entry: {
        main: path.join(__dirname, '../src/index'),
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    // entry: path.join(__dirname, '../src/index'),
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        publicPath: defaultSettings.publicPath
    },
    cache: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: 'js/[name].[chunkhash:8].chunk.js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity,
            filename: 'js/[name].[chunkhash:8].chunk.js'
        }),
        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            sourceMap: false
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body' // Inject all scripts into the body
        })
    ],
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: [].concat(
        config.additionalPaths,
        [path.join(__dirname, '/../src')]
    )
});

module.exports = config;
