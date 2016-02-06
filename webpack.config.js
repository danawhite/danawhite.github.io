var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, 'app')
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(APP_PATH, 'app.js'),
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css', include: 'app'},
            {test: /\.js$/, loader: 'babel', include: 'app'},
            {test: /\.html$/, loader: 'raw', include: 'app'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bright Ideas',
            template: 'index.html'
        })
    ]
};