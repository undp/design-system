import modal from './components/modal.js';
import select from './partials/select.js';
import footerMenu from './partials/footer-menu-mobile.js';

function main() {
    modal()
    select()
    footerMenu()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
