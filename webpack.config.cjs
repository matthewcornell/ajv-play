const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        predtimechart: './src/predtimechart.js',
        // validation: './src/validation.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Predtimechart - Welcome',
            template: './src/index.html'  // Load a custom template (lodash by default)
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
