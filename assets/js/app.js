import prism from './prism.js'
import modal from './components/modal'
import modalNav from './components/modal-nav'
import lazyLoad from './components/lazy-load'
import navigation from './components/navigation'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import locationFilters from './components/location-filters'
import trapFocus from './components/trap-focus'
import menusNav from './render-data/menu/all';
import searchData  from './render-data/modals/search'
import countriesData  from './render-data/modals/locations/countries'
import multiSelectData from './render-data/modals/locations/multi-selects'

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
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})