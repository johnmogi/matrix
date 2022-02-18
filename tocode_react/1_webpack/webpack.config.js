const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    module: {
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                }
            }

        ]
    },
    output: {
        filename:'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map'
}