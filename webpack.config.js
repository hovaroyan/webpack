const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry:  ['./src/app.js',"./src/index.js"],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
    ],
    output: {
       filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: 'auto',
    },
};