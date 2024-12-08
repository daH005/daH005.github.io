const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { persons, trains } = require('./data.js');
const { renderHome, renderPersons, renderPerson, renderTrains, renderTrain } = require('./render.js');
const { STATIC_PATH, DIST_PATH } = require('./paths.js');
const { DIST_HOME_FILENAME, DIST_PERSONS_FILENAME, DIST_PERSON_FILENAME_TEMPLATE, DIST_TRAINS_FILENAME, DIST_STATIC_FOLDER, DIST_TRAIN_FILENAME_TEMPLATE } = require('./dist.js');

module.exports = {
    output: {
        filename: 'bundle.js',
        path: DIST_PATH.toString(),
    },
    
    devServer: {
        open: true,
        hot: true,
        watchFiles: __dirname
    },
    mode: 'development',

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: STATIC_PATH.toString(),
                    to: DIST_STATIC_FOLDER,
                },
            ],
        }),

        new HtmlWebpackPlugin({
            templateContent: renderHome(),
            filename: DIST_HOME_FILENAME,
        }),

        new HtmlWebpackPlugin({
            templateContent: renderPersons(persons),
            filename: DIST_PERSONS_FILENAME,
        }),

        ...persons.map(person => {
            return new HtmlWebpackPlugin({
                templateContent: renderPerson(person, persons.length),
                filename: DIST_PERSON_FILENAME_TEMPLATE.make(person.id),
            });
        }),
        ...trains.map(train => {
            return new HtmlWebpackPlugin({
                templateContent: renderTrain(train, trains.length),
                filename: DIST_TRAIN_FILENAME_TEMPLATE.make(train.id),
            });
        }),

        new HtmlWebpackPlugin({
            templateContent: renderTrains(trains),
            filename: DIST_TRAINS_FILENAME,
        }),

    ],

}
