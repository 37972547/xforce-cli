const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // MINI CSS
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const es3ifyPlugin = require('es3ify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

console.log(__dirname);

function assetsPath(_path) {
  return path.posix.join('static', _path);
}
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': path.join(__dirname, './src'),
      pages: path.join(__dirname, './src/pages'),
      utils: path.join(__dirname, './src/utils'),
      common: path.join(__dirname, './src/common')
    }
    // alias: {
    //     react: 'anujs/dist/ReactIE.js',
    //     'react-dom': 'anujs/dist/ReactIE.js',
    //     'prop-types': 'anujs/lib/ReactPropTypes',
    //     devtools: 'anujs/lib/devtools',
    //     'create-react-class': 'anujs/lib/createClass',
    // },
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      // {
      //     test: /\.css$/,
      //     // use: 'style!css'
      //     use: {
      //         loader: "style-loader",
      //         loader : "css-loader"
      //     }
      // },
      // {
      //     test: /\.scss$/,
      //     use: {
      //         loader: "style-loader",
      //         loader : "css-loader",
      //         loader : "sass-loader"
      //     }
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        //   MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: devMode ? '[name].css' : '[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      filename: 'index.css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 30000,
    compress: true,
    inline: true,
    hot: true,
    overlay: true
  },
  mode: 'development'
};
