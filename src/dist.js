const DIST_HOME_FILENAME = 'index.html';
const DIST_PERSONS_FILENAME = 'persons.html';
const DIST_PERSON_FILENAME_TEMPLATE = {
    path_temp: `persons/{id}.html`,
    make: function(id) {
        return this.path_temp.replace('{id}', id);
    }
}
const DIST_TRAINS_FILENAME = 'trains.html';
const DIST_STATIC_FOLDER = 'static';

module.exports = {
    DIST_HOME_FILENAME,
    DIST_PERSONS_FILENAME,
    DIST_PERSON_FILENAME_TEMPLATE,
    DIST_TRAINS_FILENAME,
    DIST_STATIC_FOLDER,
}
