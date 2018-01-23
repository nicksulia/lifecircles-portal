const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 8090,
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /(node_modules|idea|bower_components|brass-build)/,
                loaders: ['eslint-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|idea|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/*.html',
            to: './',
            flatten: true
        }]),
        new CopyWebpackPlugin([{
            from: 'src/styles/style.css',
            to: './',
            flatten: true
        }]),
        new CopyWebpackPlugin([{
            from: 'images/',
            to: './images/',
            flatten: true
        }]),
    ]
};
