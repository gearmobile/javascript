/**
 * Created by zencoder on 4/10/16.
 */
'use strict';

module.exports = {
  entry: {
    home: './frontend/home',
    about: './frontend/about'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'cheap-inline-module-source-map'
};