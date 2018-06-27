const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpackConfigs/pug');
const devserver = require('./webpackConfigs/devserver');
const sass = require('./webpackConfigs/sass');
const css = require('./webpackConfigs/css');
const extractCSS = require('./webpackConfigs/css.extract');


const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

//общий код для разработки и продакшена
const common = merge([
    {
    entry: PATHS.src + '/app.js',
    output: {
        path: PATHS.build,
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Expert system',
            template: PATHS.src + '/index.pug',
            hash: true
        })
    ]
},
    pug()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([common,extractCSS()]);
    }
    if (env === 'development') {
        return merge([{}, common, devserver(),sass(),css()])
    }
};