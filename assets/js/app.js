import modal from './components/modal';
import select from './partials/select';
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider.js';

function main() {
    modal()
    select()
    scrollTriggers()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
