const path = require('path');
const MiniCssExtractPlugin = require(path.resolve('node_modules', 'mini-css-extract-plugin'));
const OptimizeCSSAssetsPlugin = require(path.resolve('node_modules', 'optimize-css-assets-webpack-plugin')); // MINI CSS
const autoprefixer = require(path.resolve('node_modules', 'autoprefixer'));
const HtmlWebPackPlugin = require(path.resolve('node_modules', 'html-webpack-plugin'));

const es3ifyPlugin = require(path.resolve('node_modules', 'es3ify-webpack-plugin'));
const UglifyJsPlugin = require(path.resolve('node_modules', 'uglifyjs-webpack-plugin'));
const CleanWebpackPlugin = require(path.resolve('node_modules', 'clean-webpack-plugin'));

const webpack = require(path.resolve('node_modules','webpack'));

console.log(__dirname);

function assetsPath(_path) {
  return path.posix.join('static', _path);
}
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve('./src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': path.join(path.resolve(), './src'),
      pages: path.join(path.resolve(), './src/pages'),
      utils: path.join(path.resolve(), './src/utils'),
      common: path.join(path.resolve(), './src/common')
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
          loader: path.resolve('node_modules', 'babel-loader')
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: path.resolve('node_modules', 'html-loader'),
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
          path.resolve('node_modules', 'style-loader'),
          path.resolve('node_modules', 'css-loader'),
          path.resolve('node_modules', 'sass-loader'),
          {
            loader: path.resolve('node_modules','postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require(path.resolve('node_modules', 'postcss-flexbugs-fixes')),
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
        loader: path.resolve('node_modules', 'url-loader'),
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: path.resolve('node_modules','url-loader'),
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: path.resolve('node_modules', 'url-loader'),
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
