const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/sample/data.json', 'utf-8'));


module.exports = {
    entry: './src/index.js', // Точка входа для сборки проекта

    output: {
        filename: 'bundle.js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
        // publicPath: '/',
    },
    module: {
        rules: [
            // {
            //     test: /\.svg/,
            //     use: {
            //         loader: "svg-url-loader",
            //     },
            // },
            {
                test: /\.mustache$/,
                use: [
                    {
                        loader: 'mustache-loader',
                        options: {
                            // Опции Mustache, если нужно
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 // Указываем папку, куда будут сохраняться изображения
            //                 // outputPath: 'images',

            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },
            {

                test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
                use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
                // options: {
                //     import: true,
                //   },
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'src/dists/images'), to: path.resolve(__dirname, 'dist/dists/images') },
            ],
          }),
        ...data.map(item => {
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