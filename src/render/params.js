const { PERSONS_URL, TRAINS_URL, 
        AWARDS_MAIN_URL, AWARDS_YEARS_URL, AWARDS_BOSS_URL, AWARDS_BOOK_URL,
        IMAGE_URLS } = require('../urls.js');
const { awardsYears } = require('../awardsYears.js');

const HOME_URLS = [
    {
        pageUrl: PERSONS_URL,
        imageUrl: IMAGE_URLS.personsIcon,
    },
    {
        pageUrl: TRAINS_URL,
        imageUrl: IMAGE_URLS.trainsIcon,
    },
    {
        pageUrl: AWARDS_MAIN_URL,
        imageUrl: IMAGE_URLS.awardsIcon,
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
        imageUrl: IMAGE_URLS.awardsYearsIcon,
        pageHeading: AWARDS_PAGE_HEADINGS[0],
    },
    {
        pageUrl: AWARDS_BOSS_URL,
        imageUrl: IMAGE_URLS.awardsBossIcon,
        pageHeading: AWARDS_PAGE_HEADINGS[1],
    },
    {
        pageUrl: AWARDS_BOOK_URL,
        imageUrl: IMAGE_URLS.awardsBookIcon,
        pageHeading: AWARDS_PAGE_HEADINGS[2],
    },
];

const AWARDS_YEARS = awardsYears.map((year, index) => {
    return {
        year,
        url: IMAGE_URLS.awardsYears[index],
    }
});

module.exports = {
    HOME_URLS,

    AWARDS_PAGE_HEADINGS,
    AWARDS_MAIN_URLS,
    AWARDS_YEARS,
}
