process.env.NODE_ENV = "development";

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const env = require("./env");
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        publicPath: "/",
        filename: "static/js/[name].js"
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader", "px2rem-loader", "postcss-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/img/[name].[hash:8].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/font/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            inject: true
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(env)
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        publicPath: "/",
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8080,
        open: true
    }
};
