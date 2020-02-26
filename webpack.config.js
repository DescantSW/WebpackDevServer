var path = require('path')
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    target: "web",
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ]
            }
        ]
    }, 
    plugins: [
        new HtmlWebPackPlugin ({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilenameFilename: "[id].css"
        })        
    ],    
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        watchContentBase: true,
        compress: true,
        port: 3000,
        hot: true
    }
}


