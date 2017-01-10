var webpack = require('webpack');
var path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve('build')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        useCache: true
                    }
                }]
            },
            {
                test: /\.html/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
};