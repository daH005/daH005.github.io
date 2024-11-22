const fs = require('fs');
const path = require('path');

const persons = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/data/persons.json'), 'utf-8'));
const trains = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/data/trains.json'), 'utf-8'));

module.exports = {
    persons,
    trains,
}
