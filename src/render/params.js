const { PERSONS_URL, TRAINS_URL,
    AWARDS_MAIN_URL, AWARDS_YEARS_URL, AWARDS_BOSS_URL, AWARDS_BOOK_URL, AWARDS_DYNASTY_URL, DYNASTY_ABSOLYAMOV_URL, DYNASTY_MYCHAILOV_URL,
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
    'Династии'
];

const DYNASTY_PAGE_HEADINGS = [
    'Династия Абсалямовых',
    'Династия Михайловых'
]

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
    {
        pageUrl: AWARDS_DYNASTY_URL,
        imageUrl: IMAGE_URLS.awardsDynastyIcon,
        pageHeading: AWARDS_PAGE_HEADINGS[3],
    },
];

const DYNASTY_MAIN_URLS = [
    {
        pageUrl: DYNASTY_ABSOLYAMOV_URL,
        imageUrl: IMAGE_URLS.dynastyAbsolyamovIcon,
        pageHeading: DYNASTY_PAGE_HEADINGS[0],
    },
    {
        pageUrl: DYNASTY_MYCHAILOV_URL,
        imageUrl: IMAGE_URLS.dynastyMichailovIcon,
        pageHeading: DYNASTY_PAGE_HEADINGS[1],
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
    DYNASTY_PAGE_HEADINGS,

    DYNASTY_MAIN_URLS
}
