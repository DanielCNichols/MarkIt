const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCSS(),
  ],
  module: {
    rules: [
      {
        //This oneOf further specifies that filenames ending in module.css are handled as modules, where ordinary .css files are considered global rulesets

        //AND... we install node-sass and sass-loader to work with scss files
        //AND... we update the regexs with .s?css$
        //AND... we add sass-loader first for modules and then for global scss files. This allows us to use both css and scss files.
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              MiniCSS.loader,
              {
                loader: 'css-loader',
                options: { modules: true },
              },
              'sass-loader',
            ],
          },
          {
            use: [MiniCSS.loader, 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },
};
