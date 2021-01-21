class Select {
    constructor() {
        this.classShowOptions = 'active';
        this.dataSelectOpen = '[data-select-open]';
        this.dataSelectOptions = '[data-select-options]';

        this.$window = $(window);
        this.currentSelectOptions = null;
        this.$selectOptionSelected = null;
        this.$selects = $('[data-select]');
    }

    init() {
        this.listenerSelects();
        this.listenerWindowClick();
    }

    listenerSelects() {
        this.$selects.each((i, select) => {
            $(select).find(this.dataSelectOpen).click(() => {
                this.$selectOptionSelected = $(select).find(this.dataSelectOpen);
                const currentOptions = $(select).find(this.dataSelectOptions);
                if (!currentOptions.is(this.currentSelectOptions)) {
                    this.closeAll();
                }
                this.currentSelectOptions = $(select).find(this.dataSelectOptions);
                if (this.currentSelectOptions) {
                    this.selectOptionsToggle();
                    this.listenerOptionsSelect();
                }
            })
        })
    }

    listenerWindowClick() {
        this.$window.click(evt => {
            if (!this.$selects.is(evt.target) &&
                this.$selects.has(evt.target).length === 0 && this.currentSelectOptions && this.currentSelectOptions.hasClass('active')) {
                this.selectOptionsToggle();
            }
        });
    }

    listenerOptionsSelect() {
        const options = this.currentSelectOptions.find('.option');
        options.each((i, option) => {
            $(option).click(() => {
                const value = $(option).find('label').text();
                this.$selectOptionSelected.html(value);
                this.currentSelectOptions.removeClass(this.classShowOptions);
            });
        })
    }

    selectOptionsToggle() {
        if (this.currentSelectOptions) {
            this.currentSelectOptions.toggleClass(this.classShowOptions);
        }
    }

    closeAll() {
        this.$selects.each((i, select) => {
            this.currentSelectOptions = $(select).find(this.dataSelectOptions);
            if (this.currentSelectOptions) {
                this.currentSelectOptions.removeClass(this.classShowOptions);
            }
        });
    }
}

export default Select;