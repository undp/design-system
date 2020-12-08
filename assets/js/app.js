import 'what-input'

import modal from './components/modal'
import inputs from './components/inputs'
import customSelect from './components/select'
import ourExpertiseSectionAnimation from './components/our-expertise-animation'
import modalNav from './components/modal-nav'
import navigation from './components/navigation'
import multiSelect from './components/multi-select'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider'
import ourMissionAnimation from './components/our-mision-animation'
import ourExpertiseMobileSlider from './components/our-expertise-mobile-slider'
import heroAnimation from './components/hero-animation'
import trapFocus from './components/trap-focus'

function main() {
    modal()
    inputs()
    ourExpertiseSectionAnimation()
    dropdown()
    modalNav()
    footerMenu()
    navigation()
    multiSelect()
    customSelect()
    scrollTriggers()
    publicationsSlider()
    ourMissionAnimation()
    ourExpertiseMobileSlider()
    heroAnimation()
    trapFocus()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
