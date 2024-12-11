const { DIST_HOME_FILENAME, 
        DIST_PERSONS_FILENAME, DIST_PERSON_FILENAME_TEMPLATE, 
        DIST_TRAINS_FILENAME, DIST_TRAIN_FILENAME_TEMPLATE, 
        DIST_AWARDS_MAIN_FILENAME, DIST_AWARDS_YEARS_FILENAME, DIST_AWARDS_BOSS_FILENAME, DIST_AWARDS_BOOK_FILENAME,
        DIST_STATIC_FOLDER } = require('./dist.js');
const { DIST_PATH } = require('./paths.js');

const BASE_URL = DIST_PATH.toString() + '/';

const HOME_URL = BASE_URL + DIST_HOME_FILENAME;
const PERSONS_URL = BASE_URL + DIST_PERSONS_FILENAME;
const PERSON_URL_TEMPLATE = {
    ...DIST_PERSON_FILENAME_TEMPLATE,
    path_temp: BASE_URL + DIST_PERSON_FILENAME_TEMPLATE.path_temp,
}
const TRAINS_URL = BASE_URL + DIST_TRAINS_FILENAME;
const TRAIN_URL_TEMPLATE = {
    ...DIST_TRAIN_FILENAME_TEMPLATE,
    path_temp: BASE_URL + DIST_TRAIN_FILENAME_TEMPLATE.path_temp,
}

const AWARDS_MAIN_URL = BASE_URL + DIST_AWARDS_MAIN_FILENAME;
const AWARDS_YEARS_URL = BASE_URL + DIST_AWARDS_YEARS_FILENAME;
const AWARDS_BOSS_URL = BASE_URL + DIST_AWARDS_BOSS_FILENAME;
const AWARDS_BOOK_URL = BASE_URL + DIST_AWARDS_BOOK_FILENAME;

const STYLE_URLS = [
    BASE_URL + DIST_STATIC_FOLDER + '/styles.css',
    BASE_URL + DIST_STATIC_FOLDER + '/bootstrap/css/bootstrap.min.css',
]
const SCRIPT_URLS = [
    BASE_URL + DIST_STATIC_FOLDER + '/bootstrap/js/bootstrap.js',
    BASE_URL + DIST_STATIC_FOLDER + '/font-awesome/font-awesome.js',
]

const _IMAGES_BASE_URL = BASE_URL + DIST_STATIC_FOLDER + '/images';
const IMAGE_URLS = {
    logo: _IMAGES_BASE_URL + '/logo.png',
    sidebar: _IMAGES_BASE_URL + '/sidebar.png',

    personTemplate: {
        pathTemp: _IMAGES_BASE_URL + '/persons/',
        make: function(filename) {
            return this.pathTemp + filename;
        }
    },
    trainTemplate: {
        pathTemp: _IMAGES_BASE_URL + '/trains/',
        make: function(filename) {
            return this.pathTemp + filename;
        }
    },

    personsIcon: _IMAGES_BASE_URL + '/menu/persons.png',
    trainsIcon: _IMAGES_BASE_URL + '/menu/trains.png',
    awardsIcon: _IMAGES_BASE_URL + '/menu/awards.png',

    awardsYearsIcon: _IMAGES_BASE_URL + '/awards/sections/years.png',
    awardsBossIcon: _IMAGES_BASE_URL + '/awards/sections/boss.png',
    awardsBookIcon: _IMAGES_BASE_URL + '/awards/sections/book.png',

    awardsYears: [2017, 2018, 2019, 2020, 2022, 2023].map(year => {
        return _IMAGES_BASE_URL + '/awards/years/' + year + '.png'; 
    }),
    
    awardsBoss: _IMAGES_BASE_URL + '/awards/boss/boss.png',
    awardsBossSign: _IMAGES_BASE_URL + '/awards/boss/sign.png',

    awardsBookMen: _IMAGES_BASE_URL + '/awards/book/men.png',
    awardsBookPaper: _IMAGES_BASE_URL + '/awards/book/paper.png',
}

module.exports = {
    HOME_URL,

    PERSONS_URL,
    PERSON_URL_TEMPLATE,

    TRAINS_URL,
    TRAIN_URL_TEMPLATE,

    AWARDS_MAIN_URL,
    AWARDS_YEARS_URL,
    AWARDS_BOSS_URL,
    AWARDS_BOOK_URL,

    STYLE_URLS,
    SCRIPT_URLS,

    IMAGE_URLS,
}
