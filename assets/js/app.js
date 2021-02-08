import './helpers/findIndexPolyfill' // IE Polyfill
import 'what-input'
import prism from './prism.js'
import './classes/UNDP'

import inputs from './components/inputs'
import lazyLoad from './components/lazy-load'
import navigation from './components/navigation'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import scrollTriggers from './components/scroll-triggers'
import newsCentreFilter from './components/news-centre-filter'
import locationFilters from './components/location-filters'
import multiSelect from './components/multi-select'
import publicationsSlider from './components/publications-slider'
import ourMissionAnimation from './components/our-mission-animation'
import ourExpertiseMobileSlider from './components/our-expertise-mobile-slider'
import ourExpertiseSectionAnimation from './components/our-expertise-animation'
import sdgCard from './components/sdg-card'
import heroAnimation from './components/hero-animation'
import select from './components/select'
import docs from './components/docs'
import navigationProgress from './components/navigation-progress'
import sideNavigation from './components/side-navigation'
import genericSlider from './components/generic-slider'
import viewMoreLess from './components/view-more-less'
import scrollUp from './components/scroll-up'

import modal from './components/modal'
import modalNav from './components/modal-nav'
import modalSdgs from './components/modal-sdgs'
import modalPublicationDownload from './components/modal-publication-download'

// JS to render nav/search DOM elements from JSON data files
import menusNav from './render-data/menu/all';
import searchData  from './render-data/modals/search'
import contentTypeData  from './render-data/news-centre/content-types'
import countriesData  from './render-data/modals/locations/countries'
import multiSelectData from './render-data/modals/locations/multi-selects'
import mobileFilterData from './render-data/modals/locations/mobile-filters'

// Trap focus for modals
import trapFocus from './components/trap-focus'

function main() {
    prism();
    modal()
    inputs()
    ourExpertiseSectionAnimation()
    dropdown()
    modalNav()
    lazyLoad()
    footerMenu()
    navigation()
    contentTypeData()
    locationFilters()
    newsCentreFilter()
    multiSelect()
    scrollTriggers()
    publicationsSlider()
    ourMissionAnimation()
    ourExpertiseMobileSlider()
    heroAnimation()
    menusNav()
    modalSdgs()
    heroAnimation()
    scrollTriggers()
    sdgCard()
    select()
    docs()
    multiSelectData()
    mobileFilterData()
    searchData()
    countriesData()
    trapFocus()
    navigationProgress()
    sideNavigation()
    genericSlider()
    viewMoreLess()
    modalPublicationDownload()
    scrollUp()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
