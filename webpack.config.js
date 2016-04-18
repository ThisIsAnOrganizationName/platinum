var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('app.css');

module.exports = {
    entry: {
        web: './web/main.js',
        mobile: './mobile/main.js'
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel?optional[]=runtime&loose=all'
            },
            {
                test: /\.less$/,
                loader: extractCSS.extract(
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract('css')
            }
        ]
    },
    vue: {
        loaders: {
            less: process.env.NODE_ENV === 'production' ? extractCSS.extract('style', 'css', 'less') : 'style!css!less'
        },
        autoprefixer: {
            browsers: ['> 5%','last 2 versions']
        }
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        extractCSS,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ];
} else {
    module.exports.plugins = [extractCSS];
    module.exports.devtool = '#source-map';
}
