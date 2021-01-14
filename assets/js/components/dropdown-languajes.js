class DropDown {
    constructor() {
        this.dropdown = null;
        this.dropdownOptions = [];
        this.dropdownAcitionOpen = null;

        this.$window = $(window);
        this.$dropdowns = $('[data-dropdown-languajes]');
    }

    init() {
        this.dropDownListeners();
        this.bindWindowListenerClick();
        this.listenerKeyPress();
    }

    dropDownListeners() {
        this.$dropdowns.each((i, dropdown) => {
            this.dropdown = $(dropdown);
            this.dropdownAcitionOpen = this.dropdown.find('[data-opening-action]');

            this.dropdownAcitionOpen.click(evt => {
                evt.preventDefault();
                this.dropdownOptions = this.dropdown.find('[data-options]');
                if (this.dropdownOptions) {
                    this.dropdownToggle();
                }
            });
        })
    }

    bindWindowListenerClick() {
        this.$window.click(evt => {
            if (!this.$dropdowns.is(evt.target) &&
                this.$dropdowns.has(evt.target).length === 0 &&
                this.dropdownAcitionOpen &&
                this.dropdownAcitionOpen.hasClass('active')) {
                this.dropdownToggle();
            }
        });
    }
    listenerKeyPress() {
        this.$window.keyup((e) => {
            if (e.keyCode === 27 && this.dropdownAcitionOpen &&
                this.dropdownAcitionOpen.hasClass('active')) { //esc
                this.dropdownToggle()
            }
        });
    }


    dropdownToggle() {
        this.dropdownOptions.toggleClass('hide');
        this.dropdownAcitionOpen.toggleClass('active');
    }
}

const init = function () {
    const dropDownLanguages = new DropDown();
    dropDownLanguages.init();
};

export default init;