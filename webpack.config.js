'use strict';

const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './index.js'], // Add 'babel-polyfill' before './index.js'
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

