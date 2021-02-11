import Foundation from 'foundation-sites'

class LocationFilters {
    constructor() {
        this.classHide = 'hide';
        this.$multiSelectFilters = $('[data-location-filters]');
        this.$searchInput = $('[data-location-search]');
        this.$countryList = $('[data-city-filters]');
        this.$activeFiltersContainer = $('[data-container-filters]');
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
        this.removeFilterListener()
        this.clearAllFiltersListener();
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

                this.showSelectedFilterPills();
            })
        })
    }

    showSelectedFilterPills() {
        const checkedOptions = this.$multiSelectFilters.find("input:checked");
        this.$activeFiltersContainer.html('');

        if (checkedOptions.length) {
            this.$activeFiltersContainer.append('<p class="tag">Active filters:</p>');

            checkedOptions.each((i, input) => {
                const text = $(input).parent().text();
                const inputValue = $(input).val();
                this.$activeFiltersContainer.append('<a class="filter" href="#" data-remove-filter data-input-value="' + inputValue + '">' + text + '</a>')
            });

            this.$activeFiltersContainer.append('<a class="filter-clear" data-close-all-select href="#">Clear All</a>');
        }
    }

    removeFilterListener() {
        this.$activeFiltersContainer.on('click', '[data-remove-filter]', (evt) => {
            evt.preventDefault();
            const $clickedPill = $(evt.currentTarget);

            const inputValue = $clickedPill.data('input-value');
            const input = this.$multiselectFilters.find('input[value="' + inputValue + '"]')
            input.prop('checked', false);

            const counter = input.closest('.options').siblings('.select-control').find('span');
            const total = counter.text().match(/\d/g);
            counter.text(total && total > 1 ? `(${total.join("") - 1})` : '');

            $clickedPill.remove();
            if (!this.$multiSelectFilters.find('input:checked').length) {
                this.$activeFiltersContainer.html('')
            }

            this.updateFilters(input);
        });
    }

    clearAllFiltersListener() {
        this.$activeFiltersContainer.on('click', '[data-close-all-select]', (evt) => {
            evt.preventDefault();
            this.$activeFiltersContainer.html('');
            this.$multiSelectFilters.find("input:checked").prop('checked', false);

            this.$multiselectFilters.find('.select-control span').text('');
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
        // Get input type (region, office) from parent node
        const inputType = input.closest('[data-type]').data('type');
        const inputValue = input.val();

        if (input.is(":checked")) {
            this.filters[inputType].push(inputValue)
        } else {
            const index = this.filters[inputType].indexOf(inputValue);
            if (index !== -1) {
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
