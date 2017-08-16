/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const open = require('open');

const devServerCfg = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,//historyApi发挥作用 =>让router接管路由
    inline:true,
    // progress: true,
    // watchOptions: {
    //     poll: true
    // },
    port:8080,
    proxy: {
        '/api': {
            target: 'http://localhost:8088',
        },
    },
    stats: {
        colors: true
    }
};
new WebpackDevServer(webpack(config), devServerCfg)
    .listen(devServerCfg.port, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + devServerCfg.port);
        console.log('Opening your system browser...');
        open('http://localhost:' + devServerCfg.port + '/webpack-dev-server/');
    });
