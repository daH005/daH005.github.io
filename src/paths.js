const { default: Path } = require('pathlib-js');

const BASE_PATH = new Path(__dirname);

const DATA_PATH = BASE_PATH.join('data');
const TEMPLATES_PATH = BASE_PATH.join('templates');
const STATIC_PATH = BASE_PATH.join('static');

const DIST_PATH = BASE_PATH.join('../dist');

module.exports = {
    BASE_PATH,
    DATA_PATH,
    TEMPLATES_PATH,
    STATIC_PATH,
    DIST_PATH,
}
