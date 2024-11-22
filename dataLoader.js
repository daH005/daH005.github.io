const fs = require('fs');

const persons = JSON.parse(fs.readFileSync('./src/sample/data/persons.json', 'utf-8'));
const trains = JSON.parse(fs.readFileSync('./src/sample/data/trains.json', 'utf-8'));

module.exports = {
    persons,
    trains,
}
