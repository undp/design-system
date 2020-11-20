import modal from './components/modal.js';
import select from './partials/select.js';
import navigation from './components/navigation.js';
import publicationsSlider from './components/publications-slider.js';

function main() {
    modal()
    select()
    navigation()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
