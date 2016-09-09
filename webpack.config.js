var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
//  context: path.join(__dirname),
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/src/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          //presets: ['react', 'es2015', 'stage-0'],

          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs',  'transform-decorators-legacy','transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/app/dist/js/",
    filename: "index.min.js",
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
