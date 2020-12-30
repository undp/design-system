import 'what-input'

import modal from './components/modal'
import inputs from './components/inputs'
import customSelect from './components/select'
import ourExpertiseSectionAnimation from './components/our-expertise-animation'
import modalNav from './components/modal-nav'
import lazyLoad from './components/lazy-load'
import navigation from './components/navigation'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import scrollTriggers from './components/scroll-triggers'
import locationFilters from './components/location-filters'
import publicationsSlider from './components/publications-slider'
import ourMissionAnimation from './components/our-mision-animation'
import ourExpertiseMobileSlider from './components/our-expertise-mobile-slider'
import heroAnimation from './components/hero-animation'
import trapFocus from './components/trap-focus'
import ajaxMultiSelects from './dummy-data/multi-selects'
import countriesRender  from './dummy-data/countries'

function main() {
    modal()
    inputs()
    ourExpertiseSectionAnimation()
    dropdown()
    modalNav()
    lazyLoad()
    footerMenu()
    navigation()
    locationFilters()
    customSelect()
    scrollTriggers()
    publicationsSlider()
    ourMissionAnimation()
    ourExpertiseMobileSlider()
    heroAnimation()
    trapFocus()
    ajaxMultiSelects()
    countriesRender();
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
