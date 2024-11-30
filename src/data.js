const { DATA_PATH } = require('./paths.js');
const { PERSON_URL_TEMPLATE, PERSON_IMAGE_URL_TEMPLATE, TRAIN_URL_TEMPLATE, TRAIN_IMAGE_URL_TEMPLATE } = require('./urls.js');

const _persons = DATA_PATH.join('persons.json').readJSONSync();
const persons = _persons.map(person => {
    person.imageUrl = PERSON_IMAGE_URL_TEMPLATE.make(person.imageFilename);
    person.pageUrl = PERSON_URL_TEMPLATE.make(person.id);
    return person;
});

const _trains = DATA_PATH.join('trains.json').readJSONSync();
const trains = _trains.map(train => {
    train.imageUrl = TRAIN_IMAGE_URL_TEMPLATE.make(train.imageFilename);
    train.pageUrl = TRAIN_URL_TEMPLATE.make(train.id);
    return train;
});

module.exports = {
    persons,
    trains,
}
