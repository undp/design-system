import modal from './components/modal.js';
import select from './partials/select.js';
import publicationsSlider from './components/publications-slider.js';

function main() {
    modal()
    select()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
