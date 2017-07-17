'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BowerWebpackPlugin = require('bower-webpack-plugin');
// Add needed plugins here

let config = Object.assign({}, baseConfig, {
    entry: {
        main: './src/index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
    },
    // entry: path.join(__dirname, '../src/index'),
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        publicPath: defaultSettings.publicPath
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            mangle: false
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
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.AggressiveMergingPlugin(),
        // new webpack.NoErrorsPlugin(),
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
