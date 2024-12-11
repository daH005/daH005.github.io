const { TEMPLATES_PATH } = require('../paths.js');

function _readTemplate(filename) {
    return TEMPLATES_PATH.join(filename).readFileSync('utf-8');
}

const TEMPLATES = {
    wrapper: _readTemplate('wrapper.mustache'),
    mainLinks: _readTemplate('mainLinks.mustache'),
    withSidebar: _readTemplate('withSidebar.mustache'),

    persons: _readTemplate('persons.mustache'),
    person: _readTemplate('person.mustache'),

    trains: _readTemplate('trains.mustache'),
    train: _readTemplate('train.mustache'),

    awardsBase: _readTemplate('awards/base.mustache'),
    awardsYears: _readTemplate('awards/years.mustache'),
    awardsBoss: _readTemplate('awards/boss.mustache'),
    awardsBook: _readTemplate('awards/book.mustache'),
}

module.exports = {
    TEMPLATES,
}
