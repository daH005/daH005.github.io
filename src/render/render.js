const { render: renderTemplate } = require('mustache');

const { HOME_URL, 
        PERSONS_URL, TRAINS_URL, 
        AWARDS_MAIN_URL, AWARDS_YEARS_URL, AWARDS_BOSS_URL, AWARDS_BOOK_URL,
        STYLE_URLS, SCRIPT_URLS, 
        IMAGE_URLS } = require('../urls.js');
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
        _renderWithSidebar(
            renderTemplate(TEMPLATES.persons, {
                persons,
            }),
            HOME_URL,
        ),
    );
}

function renderTrains(trains) {
    return _renderWrapper(
        'Дорога времени',
        _renderWithSidebar(
            renderTemplate(TEMPLATES.trains, {
                trains,
            }),
            HOME_URL,
        ),
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
            }),
            PERSONS_URL,
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
            }),
            TRAINS_URL,
        ),
    );
}

function renderAwardsMain() {
    return _renderWrapper(
        'Награды',
        _renderMainLinks('Награды', AWARDS_MAIN_URLS, HOME_URL),
    );
}

function renderAwardsYears() {
    return _renderAwardsBase(
        AWARDS_PAGE_HEADINGS[0], 
        renderTemplate(TEMPLATES.awardsYears, {
            YEARS_IMAGE_URLS: IMAGE_URLS.awardsYears,
        }),
    );
}

function renderAwardsBoss() {
    return _renderAwardsBase(
        AWARDS_PAGE_HEADINGS[1], 
        renderTemplate(TEMPLATES.awardsBoss, {
            BOSS_IMAGE_URL: IMAGE_URLS.awardsBoss,
            SIGN_IMAGE_URL: IMAGE_URLS.awardsBossSign,
        }),
    );
}

function renderAwardsBook() {
    return _renderAwardsBase(
        AWARDS_PAGE_HEADINGS[2], 
        renderTemplate(TEMPLATES.awardsBook, {
            MEN_IMAGE_URL: IMAGE_URLS.awardsBookMen,
            PAPER_IMAGE_URL: IMAGE_URLS.awardsBookPaper,
        }),
    );
}

function _renderAwardsBase(heading, content) {
    return _renderWrapper(
        heading,
        _renderWithSidebar(
            renderTemplate(TEMPLATES.awardsBase, {
                heading,
                content
            }),
            AWARDS_MAIN_URL,
        ),
    );
}

function _renderWithSidebar(content, backUrl) {
    return renderTemplate(TEMPLATES.withSidebar, {
        content,
        backUrl,
        LOGO_IMAGE_URL: IMAGE_URLS.logo,
        SIDEBAR_IMAGE_URL: IMAGE_URLS.sidebar,
    });
}

function _renderMainLinks(heading, urls, backUrl) {
    return renderTemplate(TEMPLATES.mainLinks, {
        heading,
        urls,
        backUrl,
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
