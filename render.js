const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

const _wrapperTemp = fs.readFileSync(path.resolve(__dirname, 'src/wrapper.mustache'), 'utf-8');
const _homeTemp = fs.readFileSync(path.resolve(__dirname, 'src/home.mustache'), 'utf-8');
const _withSidebarTemp = fs.readFileSync(path.resolve(__dirname, 'src/withSidebar.mustache'), 'utf-8');
const _catalogTemp = fs.readFileSync(path.resolve(__dirname, 'src/catalog.mustache'), 'utf-8');

const _personsTemp = fs.readFileSync(path.resolve(__dirname, 'src/persons.mustache'), 'utf-8');
const _personTemp = fs.readFileSync(path.resolve(__dirname, 'src/person.mustache'), 'utf-8');

const _trainsTemp = fs.readFileSync(path.resolve(__dirname, 'src/trains.mustache'), 'utf-8');

function renderHome() {
	return _renderWrapper(
		'Главная',
		Mustache.render(_homeTemp, {}),
	);
}

function renderPersons(persons) {
	return _renderWrapper(
		'Книга почета',
		_renderCatalog(
			Mustache.render(_personsTemp, {
				persons,
			}),
		),
	);
}

function renderTrains(trains) {
	return _renderWrapper(
		'Дорога времени',
		_renderCatalog(
			Mustache.render(_trainsTemp, {
				trains,
			}),
		),
	);
}

function _renderCatalog(contentBody) {
	return _renderWithSidebar(
		Mustache.render(_catalogTemp, {
			contentBody,
		}),
	);
}

function renderPerson(person, personsLength) {
	return _renderWrapper(
		person.heading,
		_renderWithSidebar(
			Mustache.render(_personTemp, {
				...person,
				prevId: person.id > 1 ? person.id - 1: null,
                nextId: person.id < personsLength ? person.id + 1 : null,
			}),
		),
	);
}

function _renderWithSidebar(content) {
	return Mustache.render(_withSidebarTemp, {
		content,
	});
}

function _renderWrapper(title, main) {
	return Mustache.render(_wrapperTemp, {
		title, 
		main,
	});
}

module.exports = {
	renderHome,
	renderPersons,
	renderPerson,
	renderTrains,
}
