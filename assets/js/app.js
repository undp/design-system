import modal from './components/modal.js';
import select from './partials/select.js';
import footerMenu from './partials/footer-menu-mobile.js';
import navigation from './components/navigation.js';
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider.js';

function main() {
    modal()
    select()
    footerMenu()
    navigation()
    scrollTriggers()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
