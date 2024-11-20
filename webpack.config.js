const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const dataLoader = require("./dataLoader")
const templateRender = require('./render');


module.exports = {
    entry: './src/index.js', // Точка входа для сборки проекта

    output: {
        filename: 'bundle.js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // путь к папке с вашими файлами
        compress: true,
        port: 9000, // порт для сервера
        hot: true // горячая замена модулей
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
              { from: path.resolve(__dirname, 'src/dists/images'), to: path.resolve(__dirname, 'dist/dists/images') },
            ],
          }),
        ...dataLoader.person.map(item => {
        return new HtmlWebpackPlugin({
            template: './src/sample/person.mustache',
            filename: `pages/${item.heading.replace(" ", "_").split(" ")[0]}.html`,
            templateParameters: item,
        });
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/road.mustache',
        filename: 'road.html',
        templateParameters: {
            sidebar: templateRender.getSidebarTemplate(),
            trains: dataLoader.trains 
        }
        
    }),
    new HtmlWebpackPlugin({
        template: './src/list.html',
        filename: 'list.html'
    })
],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
    },

    mode: 'development', // Режим сборки
};