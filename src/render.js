const { render: renderTemplate } = require('mustache');

const { TEMPLATES_PATH } = require('./paths.js');
const { HOME_URL, PERSONS_URL, PERSON_URL_TEMPLATE, TRAINS_URL, STYLE_URLS, SCRIPT_URLS, LOGO_IMAGE_URL, SIDEBAR_IMAGE_URL } = require('./urls.js');

function _readTemplate(filename) {
    return TEMPLATES_PATH.join(filename).readFileSync('utf-8');
}

const _wrapperTemp = _readTemplate('wrapper.mustache');
const _homeTemp = _readTemplate('home.mustache');
const _withSidebarTemp = _readTemplate('withSidebar.mustache');
const _catalogTemp = _readTemplate('catalog.mustache');

const _personsTemp = _readTemplate('persons.mustache');
const _personTemp = _readTemplate('person.mustache');

const _trainsTemp = _readTemplate('trains.mustache');

function renderHome() {
    return _renderWrapper(
        'Главная',
        renderTemplate(_homeTemp, {
            PERSONS_URL,
            TRAINS_URL,
        }),
    );
}

function renderPersons(persons) {
    return _renderWrapper(
        'Книга почета',
        _renderCatalog(
            renderTemplate(_personsTemp, {
                persons,
            }),
        ),
    );
}

function renderTrains(trains) {
    return _renderWrapper(
        'Дорога времени',
        _renderCatalog(
            renderTemplate(_trainsTemp, {
                trains,
            }),
        ),
    );
}

function _renderCatalog(contentBody) {
    return _renderWithSidebar(
        renderTemplate(_catalogTemp, {
            contentBody,
            HOME_URL,
        }),
    );
}

function renderPerson(person, personsLength) {
    return _renderWrapper(
        person.heading,
        _renderWithSidebar(
            renderTemplate(_personTemp, {
                ...person,
                prevId: person.id > 1 ? person.id - 1: null,
                nextId: person.id < personsLength ? person.id + 1 : null,
                PERSONS_URL,
            }),
        ),
    );
}

function _renderWithSidebar(content) {
    return renderTemplate(_withSidebarTemp, {
        content,
        LOGO_IMAGE_URL,
        SIDEBAR_IMAGE_URL,
    });
}

function _renderWrapper(title, main) {
    return renderTemplate(_wrapperTemp, {
        title, 
        main,
        STYLE_URLS,
        SCRIPT_URLS,
    });
}

module.exports = {
    renderHome,
    renderPersons,
    renderPerson,
    renderTrains,
}
