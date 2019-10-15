const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const proxyMiddleware = require('webpack-dev-middleware');

const config = {
    entry: path.resolve(__dirname + '/../src/header/html/main.js'),
    output: {
        filename: './dist/index.html',
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    // devServer: {
    //     // clientLogLevel: 'warning',
    //     historyApiFallback: {
    //         rewrites: [
    //             { from: /.*/, to: path.posix.join('/', './test/index.html') },
    //         ],
    //     },
    //     hot: true,
    //     contentBase: false, // since we use CopyWebpackPlugin.
    //     compress: true,
    //     open: true,
    //     overlay: { warnings: false, errors: true },
    //     quiet: true, // necessary for FriendlyErrorsPlugin
    //     watchOptions: {
    //         poll: false,
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.(html|less|js)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 20,
                        name: '[path][name].[ext]',
                        context: 'test/'
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './test/index.html',
            title: 'My App',
            inject: true,
            template: 'src/header/html/index.html'
        })
    ]
};




module.exports = config;