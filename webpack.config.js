const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const webpack = require('webpack');

module.exports = {
    //
    entry: {
        bundle: './src/index.jsx',
        // vendor: VENDOR_LIBS,

    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[fullhash].js'
    },
    //
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                loader: 'file-loader',
                test: /\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
                options: {
                    outputPath: 'assets/fonts',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$|\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    //
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.URL_API': JSON.stringify(process.env.URL_API),
            'process.env.NAME': JSON.stringify(process.env.NAME),
            'process.env.PASS': JSON.stringify(process.env.PASS),
            'process.env.AI_URL': JSON.stringify(process.env.AI_URL),
            'process.env.JIRA8_URL': JSON.stringify(process.env.JIRA8_URL),
            'process.env.WE_URL': JSON.stringify(process.env.WE_URL),
            'process.env.JIRA6_URL': JSON.stringify(process.env.JIRA6_URL),
            'process.env.HYWORK_URL': JSON.stringify(process.env.HYWORK_URL),
            'process.env.G_HELP_URL': JSON.stringify(process.env.G_HELP_URL),
            'process.env.HTTP_SOCKET': JSON.stringify(process.env.HTTP_SOCKET),
            'process.env.URI_SOCKET': JSON.stringify(process.env.URI_SOCKET),
            'process.env.PORT_SOCKET': JSON.stringify(process.env.PORT_SOCKET),
        })
    ],
    //
    devServer: {
        port: process.env.PORT,
        compress: true,
    },
    //
    devtool: process.env.DEV_TOOL ? process.env.DEV_TOOL : 'eval-cheap-source-map',
    //
    resolve: {
        modules: ['node_modules'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@actions': path.resolve(__dirname, './src/actions'),
            '@apis': path.resolve(__dirname, './src/apis'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@commons': path.resolve(__dirname, './src/commons'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@containers': path.resolve(__dirname, './src/containers'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@hook': path.resolve(__dirname, './src/hook'),
            '@reducers': path.resolve(__dirname, './src/reducers'),
            '@redux': path.resolve(__dirname, './src/redux'),
            '@sagas': path.resolve(__dirname, './src/sagas'),
            '@createV2': path.resolve(__dirname, './src/createV2'),
            '@socket': path.resolve(__dirname, './src/socket'),
        },
    },
};
