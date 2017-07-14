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
        app:[
            'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
            'webpack/hot/only-dev-server',
            './src/index'
        ]
    },
    cache: true,
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: defaultSettings.publicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: 'js/[name].[hash:8].chunk.js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity,
            filename: 'js/[name].[hash:8].chunk.js'
        }),
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
    loader: 'react-hot!babel-loader',
    include: [].concat(
        config.additionalPaths,
        [path.join(__dirname, '/../src')]
    )
});

module.exports = config;
