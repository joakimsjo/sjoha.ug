const { join } = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  devtool: false,
  entry: {
    main: join(__dirname, "..", "src", "index.js"),
    vendor: ["react", "react-dom"],
  },
  mode: "production",
  output: {
    path: join(__dirname, "..", "public"),
    filename: "js/[name].bundle.[hash].js",
    chunkFilename: "chunks/[name].chunk.[hash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor_app",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            passes: 3,
            pure_getters: true,
            unsafe: true,
          },
          ecma: undefined,
          warnings: false,
          parse: {
            html5_comments: false,
          },
          mangle: true,
          module: false,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          safari10: false,
          unsafe_Function: true,
        },
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: join(__dirname, "..", "src/", "index.html"),
      inject: true,
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.[hash].css",
      chunkFilename: "chunks/[id].chunk.[hash].css",
    }),
  ],
};
