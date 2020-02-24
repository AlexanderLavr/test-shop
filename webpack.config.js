const path = require('path');
const webpack = require('webpack');


module.exports = {
    node: {
        fs: 'empty',
        net: 'empty'
    },
    entry: './index.js', // Entry File
    output: {
      path: path.resolve(__dirname, 'build'), //Output Directory
      filename: 'index.js', //Output file
    },
    module: {
        rules: [
            {    
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};
