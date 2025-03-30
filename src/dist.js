const DIST_HOME_FILENAME = 'index.html';

const DIST_PERSONS_FILENAME = 'persons.html';
const DIST_PERSON_FILENAME_TEMPLATE = {
    pathTemp: `persons/{id}.html`,
    make: function(id) {
        return this.pathTemp.replace('{id}', id);
    }
}

const DIST_TRAIN_FILENAME_TEMPLATE = { 
    pathTemp: `trains/{id}.html`,
    make: function(id) {
        return this.pathTemp.replace('{id}', id);
    }
}
const DIST_TRAINS_FILENAME = 'trains.html';

const DIST_AWARDS_MAIN_FILENAME = 'awards.html';
const DIST_AWARDS_YEARS_FILENAME = 'years.html';
const DIST_AWARDS_BOSS_FILENAME = 'boss.html';
const DIST_AWARDS_BOOK_FILENAME = 'book.html';
const DIST_AWARDS_DYNASTY_FILENAME = 'dynasty.html';

DIST_DYNASTY_ABSOLYAMOV_FILENAME = 'absolyamov.html';
DIST_DYNASTY_MYCHAILOV_FILENAME = 'michailov.html';

const DIST_STATIC_FOLDER = 'static';

module.exports = {
    DIST_HOME_FILENAME,

    DIST_PERSONS_FILENAME,
    DIST_PERSON_FILENAME_TEMPLATE,

    DIST_TRAINS_FILENAME,
    DIST_TRAIN_FILENAME_TEMPLATE,

    DIST_AWARDS_MAIN_FILENAME,
    DIST_AWARDS_YEARS_FILENAME,
    DIST_AWARDS_BOSS_FILENAME,
    DIST_AWARDS_BOOK_FILENAME,
    DIST_AWARDS_DYNASTY_FILENAME,

    DIST_DYNASTY_ABSOLYAMOV_FILENAME,
    DIST_DYNASTY_MYCHAILOV_FILENAME,
    
    DIST_STATIC_FOLDER,
}
