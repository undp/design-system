import './helpers/findIndexPolyfill' // IE Polyfill
import 'what-input'
import './classes/UNDP'

import GlobalSearch from './classes/GlobalSearch'
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
import viewMore from './components/view-more'
import scrollUp from './components/scroll-up'
import imageSizes from './components/image-sizes'
import ieSticky from './components/ie-sticky'
import singlePublication from './components/single-publication'
import dynamicSlider from './components/dynamic-slider'
import focusPhotoCtas from './components/focus-photo-ctas'

import modal from './components/modal'
import modalNav from './components/modal-nav'
import modalSdgs from './components/modal-sdgs'
import modalPublicationDownload from './components/modal-publication-download'

// JS to render nav/search DOM elements from JSON data files
import menusNav from './render-data/menu/all';
import multiSelectData from './render-data/global/multi-selects'
import countriesData  from './render-data/locations/countries'
import mobileFilterData from './render-data/locations/mobile-filters'

// Trap focus for modals
import trapFocus from './components/trap-focus'

function main() {
    imageSizes()
    modal()
    inputs()
    ourExpertiseSectionAnimation()
    dropdown()
    modalNav()
    lazyLoad()
    footerMenu()
    navigation()
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
    sdgCard()
    select()
    docs()
    multiSelectData()
    mobileFilterData()
    countriesData()
    trapFocus()
    navigationProgress()
    sideNavigation()
    genericSlider()
    viewMore()
    modalPublicationDownload()
    scrollUp()
    ieSticky()
    singlePublication()
    dynamicSlider()
    focusPhotoCtas()

    const globalSearch = new GlobalSearch()
    globalSearch.init()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
