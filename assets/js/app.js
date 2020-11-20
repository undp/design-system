import modal from './components/modal.js';
import select from './partials/select.js';
import footerMenu from './partials/footer-menu-mobile.js';
import publicationsSlider from './components/publications-slider.js';

function main() {
    modal()
    select()
    footerMenu()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
