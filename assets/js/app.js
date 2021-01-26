import './helpers/findIndexPolyfill'
import 'what-input'
import prism from './prism.js'

import modal from './components/modal'
import inputs from './components/inputs'
import customSelect from './components/select'
import modalNav from './components/modal-nav'
import lazyLoad from './components/lazy-load'
import navigation from './components/navigation'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import scrollTriggers from './components/scroll-triggers'
import locationFilters from './components/location-filters'
import multiSelect from './components/multi-select'
import publicationsSlider from './components/publications-slider'
import ourMissionAnimation from './components/our-mission-animation'
import ourExpertiseMobileSlider from './components/our-expertise-mobile-slider'
import ourExpertiseSectionAnimation from './components/our-expertise-animation'
import sdgCard from './components/sdg-card'
import trapFocus from './components/trap-focus'
import modalSdgs from './components/modal-sdgs'
import docs from './components/docs'
import heroAnimation from './components/hero-animation'
import select from './components/select'
import menusNav from './render-data/menu/all';
import searchData  from './render-data/modals/search'
import contentTypeData  from './render-data/news-centre/content-types'
import countriesData  from './render-data/modals/locations/countries'
import multiSelectData from './render-data/modals/locations/multi-selects'
import mobileFilterData from './render-data/modals/locations/mobile-filters'

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
    multiSelect()
    customSelect()
    scrollTriggers()
    publicationsSlider()
    ourMissionAnimation()
    ourExpertiseMobileSlider()
    heroAnimation()
    trapFocus()
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
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
