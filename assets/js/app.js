import modal from './components/modal'
import inputs from './components/inputs'
import customSelect from './components/select'
import ourExpertiseSectionAnimation from './components/our-expertise-animation'
import modalNav from './components/modal-nav'
import navigation from './components/navigation'
import dropdown from './components/dropdown-languajes'
import footerMenu from './partials/footer-menu-mobile'
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider'
import ourMissionAnimation from './components/our-mision-animation'
import statCardBackground from './components/stat-card-background'
import ourExpertiseMobileSlider from './components/our-expertise-mobile-slider'
import heroAnimation from './components/hero-animation'

function main() {
    modal()
    inputs()
    ourExpertiseSectionAnimation()
    dropdown()
    modalNav()
    footerMenu()
    navigation()
    customSelect()
    scrollTriggers()
    publicationsSlider()
    ourMissionAnimation()
    statCardBackground()
    ourExpertiseMobileSlider()
    heroAnimation()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
