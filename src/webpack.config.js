const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { persons, trains } = require('./data.js');
const { renderHome, 
        renderPersons, renderPerson, 
        renderTrains, renderTrain,
        renderAwardsMain, renderAwardsYears, renderAwardsBoss, renderAwardsBook } = require('./render/render.js');
const { STATIC_PATH, DIST_PATH } = require('./paths.js');
const { DIST_HOME_FILENAME, 
        DIST_PERSONS_FILENAME, DIST_PERSON_FILENAME_TEMPLATE, 
        DIST_TRAINS_FILENAME, DIST_TRAIN_FILENAME_TEMPLATE,
        DIST_AWARDS_MAIN_FILENAME, DIST_AWARDS_YEARS_FILENAME, DIST_AWARDS_BOSS_FILENAME, DIST_AWARDS_BOOK_FILENAME,
        DIST_STATIC_FOLDER } = require('./dist.js');

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

        new HtmlWebpackPlugin({
            templateContent: renderTrains(trains),
            filename: DIST_TRAINS_FILENAME,
        }),
        ...trains.map(train => {
            return new HtmlWebpackPlugin({
                templateContent: renderTrain(train, trains.length),
                filename: DIST_TRAIN_FILENAME_TEMPLATE.make(train.id),
            });
        }),

        new HtmlWebpackPlugin({
            templateContent: renderAwardsMain(),
            filename: DIST_AWARDS_MAIN_FILENAME,
        }),
        new HtmlWebpackPlugin({
            templateContent: renderAwardsYears(),
            filename: DIST_AWARDS_YEARS_FILENAME,
        }),
        new HtmlWebpackPlugin({
            templateContent: renderAwardsBoss(),
            filename: DIST_AWARDS_BOSS_FILENAME,
        }),
        new HtmlWebpackPlugin({
            templateContent: renderAwardsBook(),
            filename: DIST_AWARDS_BOOK_FILENAME,
        }),

    ],

}
