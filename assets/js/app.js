import modal from './components/modal';
import select from './partials/select';
import navigation from './components/navigation.js';
import scrollTriggers from './components/scroll-triggers'
import publicationsSlider from './components/publications-slider.js';

function main() {
    modal()
    select()
    navigation()
    scrollTriggers()
    publicationsSlider()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
