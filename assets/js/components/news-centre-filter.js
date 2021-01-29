import NewsCentreFilter from "../classes/NewsCentreFilter"


const init = function () {
    const $filterContainer = $('.news-centre-cards')

    if ($filterContainer.length) {
        const newsCentreFilter = new NewsCentreFilter('.news-centre-cards')
        newsCentreFilter.init()
    }
}

export default  init;
