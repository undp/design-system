import prism from './prism.js'
import modal from './components/modal'
import modalNav from './components/modal-nav'
import lazyLoad from './components/lazy-load'
import navigation from './components/navigation'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import scrollTriggers from './components/scroll-triggers'
import locationFilters from './components/location-filters'
import sdgCard from './components/sdg-card'
import trapFocus from './components/trap-focus'
import modalSdgs from './components/modal-sdgs'
import docs from './components/docs'
import heroAnimation from './components/hero-animation'
import select from './components/select'
import menusNav from './render-data/menu/all';
import searchData  from './render-data/modals/search'
import countriesData  from './render-data/modals/locations/countries'
import multiSelectData from './render-data/modals/locations/multi-selects'


//molecules
import moleculeStatisticsSdgCard from './molecules/statistics-figures/sdg-card'

function main() {
    prism();
    modal()
    dropdown()
    modalNav()
    lazyLoad()
    footerMenu()
    navigation()
    locationFilters()
    trapFocus()
    multiSelectData()
    searchData()
    countriesData()
    menusNav()
    modalSdgs()
    heroAnimation()
    scrollTriggers()
    sdgCard()
    select()
    docs()

    moleculeStatisticsSdgCard()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
    $(document).foundation();
})