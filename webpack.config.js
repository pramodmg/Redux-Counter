const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: './js/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',                          // New
    },
    devServer: {
        contentBase: path.resolve(__dirname, './app'),  // New
    },
    resolve: {
        extensions: [ '.css', '.ts', '.tsx', '.js', '.jsx' ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ['es2015', 'react'] },
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true,localIdentName: '[name].[local]', importLoaders: 1 } },
                    'postcss-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
                    require('postcss-cssnext'),
                    require('lost')(),
                    require('postcss-reporter')()
                ]
                // ...other configs that used to directly on `modules.exports`
            }
        }),
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
    ]
};