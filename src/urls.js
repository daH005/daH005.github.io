const { DIST_HOME_FILENAME, DIST_PERSONS_FILENAME, DIST_PERSON_FILENAME_TEMPLATE, DIST_TRAINS_FILENAME, DIST_TRAIN_FILENAME_TEMPLATE, DIST_STATIC_FOLDER } = require('./dist.js');
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

const STYLE_URLS = [
    BASE_URL + DIST_STATIC_FOLDER + '/styles.css',
    BASE_URL + DIST_STATIC_FOLDER + '/bootstrap/css/bootstrap.min.css',
]
const SCRIPT_URLS = [
    BASE_URL + DIST_STATIC_FOLDER + '/bootstrap/js/bootstrap.js',
    BASE_URL + DIST_STATIC_FOLDER + 'font-awesome/font-awesome.js',
]

const _IMAGES_URL = BASE_URL + DIST_STATIC_FOLDER + '/images';
const LOGO_IMAGE_URL = _IMAGES_URL + '/logo.png';
const SIDEBAR_IMAGE_URL = _IMAGES_URL + '/sidebar.png';

const PERSON_IMAGE_URL_TEMPLATE = {
    path_temp: _IMAGES_URL + '/persons/',
    make: function(filename) {
        return this.path_temp + filename;
    }
}
const TRAIN_IMAGE_URL_TEMPLATE = {
    ...PERSON_IMAGE_URL_TEMPLATE,
    path_temp: _IMAGES_URL + '/trains/',
}

module.exports = {
    HOME_URL,
    PERSONS_URL,
    PERSON_URL_TEMPLATE,
    TRAINS_URL,
    TRAIN_URL_TEMPLATE,
    STYLE_URLS,
    SCRIPT_URLS,
    LOGO_IMAGE_URL,
    SIDEBAR_IMAGE_URL,
    PERSON_IMAGE_URL_TEMPLATE,
    TRAIN_IMAGE_URL_TEMPLATE,
}
