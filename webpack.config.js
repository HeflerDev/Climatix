/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

module.exports = {

    // The first file and piece of code that will be read it
    mode:"development",
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    'file-loader',
         ],
            }
        ]
    }
}
