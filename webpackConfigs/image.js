module.exports = function (paths) {
    return {
        module: {
            rules: [{
                test: /\.(jpg|png|svg)/,
                loader:'file-loader',
                options:{
                    name:'image/[name].[ext]'
                }
            }]
        }
    }
}