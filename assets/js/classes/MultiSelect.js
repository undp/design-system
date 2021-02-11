class MultiSelect {
    constructor(element) {
        this.classOpen = 'open';

        this.$window = $(window);
        this.$currentSelect = $(element);
        this.$selectTrigger = this.$currentSelect.find('.select-control');
    }

    init() {
        this.addListener();
        this.listenerWindowClick();
    }

    addListener() {
        this.$selectTrigger.click(() => {
            this.toggleSelect();
        });

        this.$currentSelect.on('click', 'input[type=checkbox]', (ev) => {
            let $selectedCheckbox = $(ev.target);
            let $selectedOption = $selectedCheckbox.closest('li[role=option]');

            $selectedOption.attr('aria-selected', $selectedCheckbox.is(':checked'))
        })
    }

    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$currentSelect && !this.$currentSelect.is(evt.target) &&
                this.$currentSelect.has(evt.target).length === 0 && this.$currentSelect.hasClass(this.classOpen)) {
                this.$currentSelect.removeClass(this.classOpen);
                this.$selectTrigger.attr('aria-expanded', 'false')
            }
        });
    }

    toggleSelect() {
        this.$currentSelect.toggleClass(this.classOpen);

        if(this.$selectTrigger.attr('aria-expanded') === 'true'){
            this.$selectTrigger.attr('aria-expanded', 'false')
        } else {
            this.$selectTrigger.attr('aria-expanded', 'true')
        }
    }
}

export default MultiSelect;
