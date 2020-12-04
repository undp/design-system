class MultiSelect {
    constructor() {
        this.classOpen = 'open';
        this.dataSelectControl = '[data-select-control]';

        this.$window = $(window);
        this.$currentSelect = null;
        this.selects = $('[data-multi-select]');
    }

    init() {
        this.listenerSelects();
        this.listenerWindowClick();
        this.listenerTotalOptionsSelected();
    }

    closeAll() {
        this.selects.removeClass(this.classOpen);
    }

    listenerSelects() {
        this.selects.each((i, select) => {
            $(select).find(this.dataSelectControl).click(() => {
                this.$currentSelect = $(select);
                if (!this.$currentSelect.hasClass(this.classOpen)) {
                    this.closeAll();
                }
                this.toogleSelect();
                this.totalOptionsSelected();
            });
        })
    }


    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$currentSelect && !this.$currentSelect.is(evt.target) &&
                this.$currentSelect.has(evt.target).length === 0 && this.$currentSelect.hasClass(this.classOpen)) {
                this.closeAll();
                console.log('window')
            }
        });
    }

    listenerTotalOptionsSelected() {
        this.$currentSelect
    }

    toogleSelect() {
        this.$currentSelect.toggleClass(this.classOpen);
    }


    totalOptionsSelected() {
        const inputs = this.$currentSelect.find('input[type="checkbox"]');
        console.log('this,', inputs);
        inputs.change((evt) => {
            const total = this.$currentSelect.find("input:checked").length;
            const counter = this.$currentSelect.find(this.dataSelectControl + ' span');
            counter.text('(' + total + ')');
            if (total == 0) {
                counter.text('');
            }
        })
    }
}

export default MultiSelect;