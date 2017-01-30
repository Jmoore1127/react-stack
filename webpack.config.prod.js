var webpack = require('webpack');
var path = require('path');
var atLoader = require('awesome-typescript-loader');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    output: {
        publicPath: '/',
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
                            silent:true,
                            useBabel: true,
                            useCache: true
                        }
                    }]
            },
            {
                test: /\.html/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: true,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:"server",
            openAnalyzer:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new atLoader.CheckerPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            sourceMap:true,
            debug: false
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

