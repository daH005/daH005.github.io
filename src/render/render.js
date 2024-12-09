const { render: renderTemplate } = require('mustache');

const { HOME_URL, 
        PERSONS_URL, TRAINS_URL, 
        AWARDS_MAIN_URL, AWARDS_YEARS_URL, AWARDS_BOSS_URL, AWARDS_BOOK_URL,
        STYLE_URLS, SCRIPT_URLS, 
        LOGO_IMAGE_URL, SIDEBAR_IMAGE_URL } = require('../urls.js');
const { HOME_URLS, AWARDS_PAGE_HEADINGS, AWARDS_MAIN_URLS } = require('./params.js');
const { TEMPLATES } = require('./templates.js');

function renderHome() {
    return _renderWrapper(
        'Главная',
        _renderMainLinks('Синара', HOME_URLS),
    );
}

function renderPersons(persons) {
    return _renderWrapper(
        'Книга почета',
        _renderCatalog(
            renderTemplate(TEMPLATES.persons, {
                persons,
            }),
        ),
    );
}

function renderTrains(trains) {
    return _renderWrapper(
        'Дорога времени',
        _renderCatalog(
            renderTemplate(TEMPLATES.trains, {
                trains,
            }),
        ),
    );
}

function _renderCatalog(contentBody) {
    return _renderWithSidebar(
        renderTemplate(TEMPLATES.catalog, {
            contentBody,
            HOME_URL,
        }),
    );
}

function renderPerson(person, personsLength) {
    return _renderWrapper(
        person.heading,
        _renderWithSidebar(
            renderTemplate(TEMPLATES.person, {
                ...person,
                prevId: person.id > 1 ? person.id - 1: null,
                nextId: person.id < personsLength ? person.id + 1 : null,
                PERSONS_URL,
            }),
        ),
    );
}

function renderTrain(train, dataLength) {
    return _renderWrapper(
        train.heading,
        _renderWithSidebar(
            renderTemplate(TEMPLATES.train, {
                ...train,
                prevId: train.id > 1 ? train.id - 1: null,
                nextId: train.id < dataLength ? train.id + 1 : null,
                TRAINS_URL,
            }),
        ),
    );
}

function renderAwardsMain() {
    return _renderWrapper(
        'Награды',
        _renderMainLinks('Награды', AWARDS_MAIN_URLS),
    );
}

function renderAwardsYears() {
    return _renderWrapper(
        AWARDS_PAGE_HEADINGS[0],
        _renderWithSidebar(
            renderTemplate(TEMPLATES.awardsYears, {
                // ...
            }),
        ),
    );
}

function renderAwardsBoss() {
    return _renderWrapper(
        AWARDS_PAGE_HEADINGS[1],
        _renderWithSidebar(
            renderTemplate(TEMPLATES.awardsBoss, {
                // ...
            }),
        ),
    );
}

function renderAwardsBook() {
    return _renderWrapper(
        AWARDS_PAGE_HEADINGS[2],
        _renderWithSidebar(
            renderTemplate(TEMPLATES.awardsBook, {
                // ...
            }),
        ),
    );
}

function _renderWithSidebar(content) {
    return renderTemplate(TEMPLATES.withSidebar, {
        content,
        LOGO_IMAGE_URL,
        SIDEBAR_IMAGE_URL,
    });
}

function _renderMainLinks(heading, urls) {
    return renderTemplate(TEMPLATES.mainLinks, {
        heading,
        urls,
    });
}

function _renderWrapper(title, main) {
    return renderTemplate(TEMPLATES.wrapper, {
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
    renderTrain,

    renderAwardsMain,
    renderAwardsYears,
    renderAwardsBoss,
    renderAwardsBook,
}
