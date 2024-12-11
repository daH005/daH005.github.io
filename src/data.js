const { DATA_PATH } = require('./paths.js');
const { PERSON_URL_TEMPLATE, TRAIN_URL_TEMPLATE,
		IMAGE_URLS } = require('./urls.js');

const persons = DATA_PATH.join('persons.json').readJSONSync().map(person => {
    person.imageUrl = IMAGE_URLS.personTemplate.make(person.imageFilename);
    person.pageUrl = PERSON_URL_TEMPLATE.make(person.id);
    return person;
});

const trains = DATA_PATH.join('trains.json').readJSONSync().map(train => {
    train.imageUrl = IMAGE_URLS.trainTemplate.make(train.imageFilename);
    train.pageUrl = TRAIN_URL_TEMPLATE.make(train.id);
    return train;
});

module.exports = {
    persons,
    trains,
}
