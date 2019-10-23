process.env.NODE_ENV = "production";

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const env = require("./env");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        publicPath: "/",
        filename: "static/js/[name].[chunkhash:8].js"
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
                loader: [MiniCssExtractPlugin.loader, "css-loader", "px2rem-loader", "postcss-loader"]
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            inject: true
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/css/main.[contenthash:8].css"
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin(env)
        // new BundleAnalyzerPlugin()
    ]
};
