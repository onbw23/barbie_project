const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        devtool: false,
        rules: [
            {
                test: /\.js$/i,
                use: 'babel-loader'
            },
            {
                test: /\.scss/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'), //dart-sass 적용
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}