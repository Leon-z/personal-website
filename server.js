/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const open = require('open');
const port=8080;


new WebpackDevServer(webpack(config), config.devServer)
.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + port);
  console.log('Opening your system browser...');
  open('http://localhost:' + port + '/webpack-dev-server/');
});
