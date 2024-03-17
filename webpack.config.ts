import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
//import 'webpack-dev-server';

export default {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: 'ts-loader', 
        exclude: /node_modules/,
      },
    ],
  },
};
