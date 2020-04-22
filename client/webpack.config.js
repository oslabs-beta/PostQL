const webpack = require('webpack');

module.exports = {
  entry: ['./inc/polyfills.js', './src/index.tsx'],
  output: {
    path: __dirname,
    filename: './build/bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
  },
  devtool: 'source-map',
  devServer: {
    public: 'localhost:8080',
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.mjs?$/,
        type: 'javascript/auto',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.((s(a|c))|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/public/icons/[name].[ext]',
      },
    ],
  },
};
