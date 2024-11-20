const fs = require('fs');

const person = JSON.parse(fs.readFileSync('./src/sample/data/person.json', 'utf-8'));
const trains = JSON.parse(fs.readFileSync('./src/sample/data/trains.json', 'utf-8'));

module.exports = {
    person: person,
    trains: trains
}