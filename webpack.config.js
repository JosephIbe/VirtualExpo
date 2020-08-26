const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const DotEnv = require('dotenv-webpack')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: "/"
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/public/index.html',
            inject: true,
            minify: "auto"
        }),
        new DotEnv(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        hot: true,
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 3001,
        clientLogLevel: 'silent',
        historyApiFallback: true
    }
}