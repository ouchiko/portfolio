// plugins 
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// environment
const isProduction = (process.env.NODE_ENV === 'production');
const isDevelopment = !isProduction;

// paths 
const path = require('path');
let viewPath = '';
let cssPath = 'css/';
let jsPath = 'js/';

module.exports = {
    entry: './src/app.js',
    output: {
        filename: jsPath + 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDevelopment,
                    },
                },
                'css-loader',
                'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        }),
        new MiniCssExtractPlugin({
            filename: isProduction ? cssPath + '[name].[hash].css' : cssPath + '[name].css',
            chunkFilename: isProduction ? cssPath + '[id].[hash].css' : cssPath + '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]
};