class GlobalSearch {
    constructor() {
        this.$modal = $('[data-modal-search]')
        this.$searchFiltersContainer = this.$modal.find('.search-filters')
        this.$searchResultsContainer = this.$modal.find('[data-search-results]')
        this.$searchInput = this.$modal.find('.search-input input[type=search]')
        this.$mobileFilterOpen = this.$searchFiltersContainer.find('.mobile-filters-open .btn')
        this.$mobileFilterClose = this.$searchFiltersContainer.find('.mobile-filters-close .btn')
        this.$activeFiltersContainer = this.$searchFiltersContainer.find('[data-active-filters]')
        this.$multiselectFilters = this.$searchFiltersContainer.find('.multi-select')

        this.filters = {}
    }

    init() {
        this.bindEvents()
        this.populateQuickLinks()
    }

    bindEvents() {
        this.$searchInput.on('keyup', () => {
            this.performSearch()
        })

        this.$mobileFilterOpen.on('click', () => {
            this.openFiltersMobile();
        })

        this.$mobileFilterClose.on('click', () => {
            this.closeFiltersMobile();
        })

        this.multiSelectFiltersListener()
        this.removeFilterListener()
        this.clearAllFiltersListener()
    }

    openFiltersMobile() {
        this.$searchFiltersContainer.addClass('open-filters')
    }

    closeFiltersMobile() {
        this.$searchFiltersContainer.removeClass('open-filters')
    }

    multiSelectFiltersListener() {
        this.$multiselectFilters.each((i, multiSelect) => {
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

            if (!this.$multiselectFilters.find('input:checked').length) {
                this.$activeFiltersContainer.html('')
            }

            this.updateFilters(input);
        });
    }

    clearAllFiltersListener() {
        this.$activeFiltersContainer.on('click', '[data-close-all-select]', (evt) => {
            evt.preventDefault();
            this.$activeFiltersContainer.html('');
            this.$multiselectFilters.find("input:checked").prop('checked', false);

            this.$multiselectFilters.find('.select-control span').text('');
            this.$mobileFilterOpen.find('.counter').text('')
        });
    }

    showSelectedFilterPills() {
        const checkedOptions = this.$multiselectFilters.find("input:checked");
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

        this.$mobileFilterOpen.find('.counter').text(checkedOptions.length > 0? `(${checkedOptions.length})` : '')
    }

    updateFilters(input) {
        // Get input type(language, content type, region, topic) from parent node
        const inputType = input.closest('[data-type]').data('type');
        const inputValue = input.val();

        if(this.filters[inputType] === undefined) {
            this.filters[inputType] = []
        }

        if (input.is(":checked")) {
            this.filters[inputType].push(inputValue)
        } else {
            const index = this.filters[inputType].indexOf(inputValue);
            if (index !== -1) {
                this.filters[inputType].splice(index, 1);
            }
        }

        //this.performSearch();
    }

    performSearch() {
        let searchValue = this.$searchInput.val();

        if(searchValue.length < 3) {
            return false
        }

        console.log(searchValue)

        this.$modal.addClass('showing-results')
    }

    populateQuickLinks() {
        $.ajax({
            type: 'GET',
            url: '/assets/js/render-data/json-files/modals/search/quick-links.json',
            dataType: 'json',
            success: (response) => {
                response.forEach((item) => {
                    this.$searchResultsContainer.append(` 
                    <div class="cell medium-6 list-quicklinks">
                        <h2 class="title">${ item.name }</h2>
                        <ul>
                            ${item.links.map(link => {
                        return `<li><a href="${ link.url }">${ link.name }</a></li>`
                    }).join('')}
                        </ul>
                    </div>`);
                });
            }
        });
    }
}

export default GlobalSearch;