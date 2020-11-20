import modal from './components/modal.js';
import select from './partials/select.js';
import scrollTrigger from './components/scroll-trigger.js';

function main() {
    modal()
    select()
    scrollTrigger()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
})
