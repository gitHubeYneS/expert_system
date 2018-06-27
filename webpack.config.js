const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS={
    src:path.join(__dirname,'src'),
    build:path.join(__dirname,'build')
}

module.exports={
    entry:PATHS.src+'/app.js',
    output:{
        path:PATHS.build,
        filename:'[name].bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Expert system',
            template:PATHS.src+'/index.pug',
            hash:true
        })
    ],
    module:{
        rules:[{
            test:/\.pug$/,
            loader:'pug-loader',
            options:{
                pretty:true
            }
        }]
    }
};
