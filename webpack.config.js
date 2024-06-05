import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.tsx';
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};
export const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
};
export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
  }),
];
export const devServer = {
  static: {
    directory: join(__dirname, 'public'),
  },
  compress: true,
  port: 3000,
};
export const devtool = 'source-map';
