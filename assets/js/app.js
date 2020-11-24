import modal from './components/modal.js';
import select from './partials/select.js';
import ourExpertiseSectionAnimation from './components/our-expertise-animation.js';
import navigation from './components/navigation.js';
import dropdown from './components/dropdown-languajes';
import footerMenu from './partials/footer-menu-mobile';
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider';

function main() {
    modal()
    select()
    ourExpertiseSectionAnimation()
    dropdown()
    footerMenu()
    navigation()
    scrollTriggers()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
