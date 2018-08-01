const path = require('path');
const cliConfig = require('../config/index').config;
const webpackConfigJson = require(path.resolve(cliConfig.webpackConfigFileName));
const MiniCssExtractPlugin = require(path.resolve('node_modules','mini-css-extract-plugin'));
const OptimizeCSSAssetsPlugin = require(path.resolve('node_modules','optimize-css-assets-webpack-plugin')); // MINI CSS
const HtmlWebPackPlugin = require(path.resolve('node_modules','html-webpack-plugin'));
const es3ifyPlugin = require(path.resolve('node_modules','es3ify-webpack-plugin'));
const UglifyJsPlugin = require(path.resolve('node_modules','uglifyjs-webpack-plugin'));
const CleanWebpackPlugin = require(path.resolve('node_modules','clean-webpack-plugin'));
const webpack = require(path.resolve('node_modules','webpack'));

console.log(__dirname);

// const devMode = process.env.NODE_ENV !== 'production'
// console.log(process.env.NODE_ENV);
// console.log(devMode);
// const devMode = false;

const config = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve('./src/index.jsx'),
  // output: {
  //     path: path.resolve(__dirname, 'dist'),
  //     filename: 'app.bundle.js'
  // },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      react: 'anujs/dist/ReactIE.js',
      'react-dom': 'anujs/dist/ReactIE.js',
      'prop-types': 'anujs/lib/ReactPropTypes',
      devtools: 'anujs/lib/devtools',
      'create-react-class': 'anujs/lib/createClass'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: true
        },
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      // {
      //     test: /\.js|jsx$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: "babel-loader"
      //     }
      // },
      {
        test: /\.js|jsx$/,
        use: {
          loader:path.resolve('node_modules','babel-loader'),
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'ie >= 7']
                  },
                  modules: 'commonjs',
                  useBuiltIns: true,
                  debug: false
                }
              ],
              'react',
              'stage-2'
            ],
            plugins: ['transform-runtime']
          }
        },
        include: [path.resolve('src')]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader:path.resolve('node_modules','html-loader'),
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
         path.resolve('node_modules','css-loader'),
         path.resolve('node_modules','sass-loader')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader:path.resolve('node_modules','url-loader'),
            options: {
              limit: 10000,
              name: '[name].[ext]'
            }
          },
         path.resolve('node_modules','image-webpack-loader') // 压缩图片
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader:  path.resolve('node_modules','url-loader'),
            options: {
              limit: 10000,
              name: '[name].[ext]'
            }
          },
          path.resolve('node_modules','image-webpack-loader') // 压缩图片
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          path.resolve('node_modules','file-loader')
        ]
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build'], {
      root: path.resolve(),
      verbose: true,
      dry: false
    }),
    new es3ifyPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),
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
    contentBase: 'dist',
    port: 30000,
    compress: true,
    inline: true,
    hot: true,
    overlay: true
  },
  mode: 'production'
};

// 配置入口
if(webpackConfigJson.entry) {
  config.entry = path.resolve(webpackConfigJson.entry);
}

module.exports = config;
