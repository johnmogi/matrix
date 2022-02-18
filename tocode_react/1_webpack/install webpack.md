npm install --save-dev webpack webpack-cli

0. webpack.config.js:
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename:'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map'
}
https://stackoverflow.com/questions/64606621/error-while-running-npm-run-dev-command-in-react-application
npx webpack

npx webpack -w
npm install --save-dev --offline browserslist
npx browserslist
npm install --save-dev babel-cli babel-loader @babel/core @babel/preset-env

0. .babelrc:
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}

1. webpack.config:
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

npx webpack

// EXTRA - loadash
npm i loadash
import _ from 'loadash'
_.random(10)
