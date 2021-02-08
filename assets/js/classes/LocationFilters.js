import Foundation from 'foundation-sites'

class LocationFilters {
    constructor() {
        this.classHide = 'hide';
        this.$multiSelectFilters = $('[data-location-filters]');
        this.$searchInput = $('[data-location-search]');
        this.$countryList = $('[data-city-filters]');
        this.$containerFilter = $('[data-container-filters]');
        this.filters = {
            region: [],
            office: [],
            inputSearch: '',
        };

        // Mobile
        this.totalMatches = 0;

        this.$btnFilterCounter = $('[data-open-filters] .counter');
        this.$checkboxFilter = $('[data-filter-checkbox]');
        this.btnClearCheckboxs = $('[data-filter-clear]');
        this.$btnFilterShowMatchesCounter = $('[data-btn-filters-show-matches] .counter');

    }

    init() {
        this.inputSearchListener();
        this.mobileFiltersListener();
        this.multiSelectFiltersListener();
    }

    mobileFiltersListener() {
        this.$checkboxFilter.on('change', 'input[type=checkbox]', (evt) => {
            evt.stopImmediatePropagation();
            this.updateFilters($(evt.currentTarget));
        });

        this.btnClearCheckboxs.click((evt) =>{
            evt.preventDefault();
            this.$checkboxFilter.find('input[type=checkbox]').prop('checked', false);
            this.filters.region = [];
            this.filters.office = [];
            this.search();
        });
    }

    multiSelectFiltersListener() {
        this.$multiSelectFilters.each((i, multiSelect) => {
            let $currentMultiSelect = $(multiSelect)

            $currentMultiSelect.on('change', 'input[type="checkbox"]',(evt) => {
                evt.stopImmediatePropagation();

                this.updateFilters($(evt.currentTarget));

                const inputs = $currentMultiSelect.find("input:checked");
                const total = inputs.length;
                const counter = $currentMultiSelect.find('.select-control span');

                counter.text('(' + total + ')');

                if (total === 0) {
                    counter.text('');
                }

                this.printContainerFilters();
            })
        })
    }

    printContainerFilters() {
        const checkedOptions = this.$multiSelectFilters.find("input:checked");
        this.$containerFilter.html('');

        if (checkedOptions.length) {
            this.$containerFilter.append('<p class="tag uppercase">Active filters:</p>');

            checkedOptions.each((i, input) => {
                const text = $(input).parent().text();
                const inputValue = $(input).val();
                this.$containerFilter.append('<a class="filter" href="#" data-remove-filter data-input-value="' + inputValue + '">' + text + '</a>')
            });

            this.$containerFilter.append('<a class="tag filter-clear" data-close-all-select href="#">Clear All</a>');
            this.listenerRemoveFilter()
            this.listenerClearAllFilters();
        }
    }

    listenerRemoveFilter() {
        $('[data-remove-filter]').on('click', (evt) => {
            evt.preventDefault();

            const inputValue = $(evt.currentTarget).data('input-value');
            const input = $('input[value="' + inputValue + '"]');
            input.prop('checked', false);

            const updateSelectCounter = () => {
                const counter = input.closest('.options').siblings('.select-control').find('span');
                const total = counter.text().match(/\d/g);
                counter.text(total && total > 1 ? `(${total.join("") - 1})` : '');
            };
            updateSelectCounter();

            $(evt.currentTarget).remove();
            if (!this.$multiSelectFilters.find('input:checked').length) {
                this.$containerFilter.html('')
            }

            this.updateFilters(input);
        });
    }

    listenerClearAllFilters() {
        $('[data-close-all-select]').on('click', (evt) => {
            evt.preventDefault();
            this.$containerFilter.html('');
            this.$multiSelectFilters.find("input:checked").prop('checked', false);

            this.$multiSelectFilters.each((i, select) => {
                const counter = $(select).find('.select-control span');
                counter.text('');
            });
            this.filters.region = [];
            this.filters.office = [];
            this.search();
        });
    }

    inputSearchListener() {
        this.$searchInput.keyup(event => {
            this.filters.inputSearch = this.$searchInput.val().toLowerCase()
            this.search();
        });
    }

    updateFilters(input) {
        //get input type(region, office) from parent node,
        const inputType = input.closest('[data-type]').data('type');
        const inputValue = input.val();

        if (input.is(":checked")) {
            this.filters[inputType].push(inputValue)
        } else {
            const index = this.filters[inputType].indexOf(inputValue);
            if (index > -1) {
                this.filters[inputType].splice(index, 1);
            }
        }
        this.search();
    }

    search() {
        let filtered;
        this.$countryList = $('[data-city-filters]');
        if(this.filters.office.length && this.filters.region.length) {
            filtered = this.$countryList.filter((index, node) => {
                const text = $(node).data('city-filters').toLowerCase();

                if(this.filters.inputSearch.length) {
                    return (text.includes(this.filters.inputSearch.toLowerCase()) &&
                        this.filters.region.filter(value => text.includes(value.toLowerCase())).length &&
                        this.filters.office.filter(value => text.includes(value.toLowerCase())).length)
                }

                return (this.filters.region.filter(value => text.includes(value.toLowerCase())).length  &&
                    this.filters.office.filter(value => text.includes(value.toLowerCase())).length);
            });
        }
        else if(this.filters.office.length) {
            filtered = this.$countryList.filter((index, node) => {
                const text = $(node).data('city-filters').toLowerCase();

                if (this.filters.inputSearch.length) {
                    return (text.includes(this.filters.inputSearch.toLowerCase()) &&
                        this.filters.office.filter(value => text.includes(value.toLowerCase())).length)
                }

                return this.filters.office.filter(value => text.includes(value.toLowerCase())).length;
            });
        }
        else if( this.filters.region.length) {
            filtered = this.$countryList.filter((index, node) => {
                const text = $(node).data('city-filters').toLowerCase();

                if(this.filters.inputSearch.length) {
                    return (text.includes(this.filters.inputSearch.toLowerCase()) &&
                        this.filters.region.filter(value => text.includes(value.toLowerCase())).length);
                }

                return this.filters.region.filter(value => text.includes(value.toLowerCase())).length;
            });
        }
        else if(this.filters.inputSearch.length) {
            filtered = this.$countryList.filter((index, node) => {
                const text = $(node).data('city-filters').toLowerCase();
                return text.includes(this.filters.inputSearch.toLowerCase())
            });
        }

        if (this.filters.inputSearch.length > 0 ||
            this.filters.office.length > 0 ||
            this.filters.region.length > 0) {
                this.$countryList.addClass(this.classHide);
                filtered.removeClass(this.classHide);
                this.totalMatches = filtered.length;
        } else {
            this.totalMatches = 0;
            this.$countryList.removeClass(this.classHide);
        }
        this.mobileUpdateFilters();
    }

    mobileUpdateFilters() {
        if (Foundation.MediaQuery.upTo('medium')) {
            this.printTotalMatches();
            this.printTotalFiltersApplied();
        }
    }

    //mobile
    printTotalFiltersApplied() {
        const totalFilters = this.filters.region.length + this.filters.office.length;
        this.$btnFilterCounter.text(totalFilters);
        this.$btnFilterCounter.toggleClass(this.classHide, totalFilters == 0);
    }

    printTotalMatches() {
        this.$btnFilterShowMatchesCounter.text(` ${this.totalMatches} `);
        this.$btnFilterShowMatchesCounter.toggleClass(this.classHide, this.totalMatches === 0);
    }
}

export default LocationFilters;
