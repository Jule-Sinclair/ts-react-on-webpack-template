const path = require('path');

module.exports = (env, argv) => ({
  entry: {
    'app': [
      path.resolve(__dirname, 'src/app/index.tsx'),
      path.resolve(__dirname, 'src/css/main.css'),
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        include: /assets\//,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ]
  },
  devtool: 'cheap-eval-sourcemap',
  devServer: {
    hot: true,
    port: 9000,
    inline: true,
    contentBase: path.join(__dirname, 'public'),
  },
});