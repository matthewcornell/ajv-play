const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    experiments: {
        outputModule: true,
    },
    mode: 'development',  // todo xx
    entry: './src/predtimechart.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Predtimechart - Welcome',
            template: './src/index.html',  // Load a custom template (lodash by default)
            inject: false,  // is hard-coded in src/index.html
        }),
    ],
    output: {
        filename: 'predtimechart.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'module',  // apparently experimental
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
