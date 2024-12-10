const { PERSONS_URL, TRAINS_URL, 
        AWARDS_MAIN_URL, AWARDS_YEARS_URL, AWARDS_BOSS_URL, AWARDS_BOOK_URL } = require('../urls.js');

const HOME_URLS = [
    {
        pageUrl: PERSONS_URL,
        imageUrl: './static/images/menu/persons.png',
    },
    {
        pageUrl: TRAINS_URL,
        imageUrl: './static/images/menu/trains.png',
    },
    {
        pageUrl: AWARDS_MAIN_URL,
        imageUrl: './static/images/menu/awards.png',
    },
];

const AWARDS_PAGE_HEADINGS = [
    'Лучшее сервисное локомотивное депо',
    'Руководитель сервисного локомотивного депо',
    'Книга «Дирекция тяги-локомотив 15 лет в пути»',
];

const AWARDS_MAIN_URLS = [
    {
        pageUrl: AWARDS_YEARS_URL,
        imageUrl: './static/images/awards/sections/years.png',
        pageHeading: AWARDS_PAGE_HEADINGS[0],
    },
    {
        pageUrl: AWARDS_BOSS_URL,
        imageUrl: './static/images/awards/sections/boss.png',
        pageHeading: AWARDS_PAGE_HEADINGS[1],
    },
    {
        pageUrl: AWARDS_BOOK_URL,
        imageUrl: './static/images/awards/sections/book.png',
        pageHeading: AWARDS_PAGE_HEADINGS[2],
    },
];

module.exports = {
    HOME_URLS,

    AWARDS_PAGE_HEADINGS,
    AWARDS_MAIN_URLS,
}
