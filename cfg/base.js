'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
var precss = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'eval',
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        noInfo: false
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        alias:{
            utils: path.resolve(__dirname, '../src/utils/'),
            Styles: path.resolve(__dirname, '../src/styles/')
        }
    },
};
