var webpack = require("webpack");

module.exports = {
    entry: [
        './index.tsx',
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "ts-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};
