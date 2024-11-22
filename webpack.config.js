const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dataLoader = require("./dataLoader")
const templateRender = require('./render');

module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.mustache$/,
                use: [
                    {
                        loader: 'mustache-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'src/dists'), 
                    to: path.resolve(__dirname, 'dist/dists') 
                },
            ],
        }),

        new HtmlWebpackPlugin({
            templateContent: templateRender.renderHome(),
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            templateContent: templateRender.renderPersons(dataLoader.persons),
            filename: 'persons.html',
        }),

        ...dataLoader.persons.map(person => {
            return new HtmlWebpackPlugin({
                templateContent: templateRender.renderPerson(person, dataLoader.persons.length),
                filename: `persons/${person.id}.html`,
            });
        }),

        new HtmlWebpackPlugin({
            templateContent: templateRender.renderTrains(dataLoader.trains),
            filename: 'trains.html',
        }),

    ],

    devServer: {  // ToDo: Два ключа "devServer"? Выходит этот переопределяет первый? Или я чего-то не понимаю?
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },

    mode: 'development',
};