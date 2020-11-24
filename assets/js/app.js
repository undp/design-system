import modal from './components/modal';
import select from './partials/select';
import navigation from './components/navigation';
import dropdown from './components/dropdown-languajes';
import footerMenu from './partials/footer-menu-mobile';
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider';
import ourMissionAnimation from './components/our-mision-animation';

function main() {
    modal()
    select()
    dropdown()
    footerMenu()
    navigation()
    scrollTriggers()
    publicationsSlider()
    ourMissionAnimation()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
