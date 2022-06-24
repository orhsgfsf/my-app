export const Dictionary = (type) => {
    // Danny: I have no idea how many types of date they have. I found that there are still 'lastAirDate', 'deathday' etc,
    // but I think it should be able to be called from backend so that I can know all types of date.

    // Danny: Let me hardcode some of them here first
    
    const date = {
        movie: 'releaseDate',
        tv: 'firstAirDate',
        person: 'birthday',
    }

    const subCategoryOptions = {
        tv: ['airingToday', 'onTheAir', 'popular', 'topRated'],
        movie: ['nowPlaying', 'popular', 'topRated', 'upcoming'],
    }

    const searchTypes = ['multi', 'movie', 'tv']

    const obj = {
        date,
        subCategoryOptions,
        searchTypes,
    }

    return obj[type]
}
