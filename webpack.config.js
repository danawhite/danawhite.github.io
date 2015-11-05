var webpack = require('webpack');
var path = require('path');

const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: __dirname + '/app/app.js',
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
    plugins: {

    }
};