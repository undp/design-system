import debounce from 'lodash/debounce'
import Foundation from 'foundation-sites'

class GlobalSearch {
    constructor() {
        this.$body = $('body');
        this.$modal = $('[data-modal-search]')
        this.$searchFiltersContainer = this.$modal.find('.search-filters')
        this.$searchResultsWrapper = this.$modal.find('.search-results')
        this.$searchResultsContainer = this.$searchResultsWrapper.find('[data-search-results]')
        this.$searchMetadataContainer = this.$searchResultsWrapper.find('[data-search-metadata]')
        this.$searchInput = this.$modal.find('.search-input input[type=search]')
        this.$mobileFilterOpen = this.$searchFiltersContainer.find('.mobile-filters-open .btn')
        this.$mobileFilterClose = this.$searchFiltersContainer.find('.mobile-filters-close .btn')
        this.$activeFiltersContainer = this.$searchFiltersContainer.find('[data-active-filters]')
        this.$multiselectFilters = this.$searchFiltersContainer.find('.multi-select')
        this.multiselectFiltersLoaded = false

        // Results management
        this.jsonResults = []
        this.currentResultsPage = 1
        this.totalResultsLoaded = 0
        this.loadMoreButton = null
        this.allResultsLoaded = false
        this.$searchResultsMetadata = null

        // Filter management
        this.filters = {}
        this.validFilters = this.$multiselectFilters.map((index, multiselect) => {
            let $multiselect = $(multiselect)
            return $multiselect.find('[data-type]').data('type')
        }).get()
    }

    init() {
        this.bindEvents()
        this.populateQuickLinks()
        this.getSearchFromQueryParams()
    }

    bindEvents() {
        this.$searchInput.on('keyup', () => {
            this.resetSearch()
            this.performSearch()
        })

        this.$mobileFilterOpen.on('click', () => {
            this.openFiltersMobile()
        })

        this.$mobileFilterClose.on('click', () => {
            this.closeFiltersMobile()
        })

        $(window).resize('resize',debounce(() => {
            this.setResultsWrapperHeight()
        }, 200))

        this.$searchResultsContainer.on('scroll', () => {
            if(this.$searchResultsContainer[0].scrollTop === (this.$searchResultsContainer[0].scrollHeight - this.$searchResultsContainer[0].offsetHeight)) {
                this.loadMoreResults()
            }
        })

        this.$searchResultsContainer.on('click', '.btn.blue', () => {
            this.loadMoreResults()
        })

        this.$body.on('UNDP.multiselectReady', (evt, data) => {
            if(this.$multiselectFilters.filter(`#${data.multiselect}`).length) {
                this.multiselectFiltersLoaded += this.$multiselectFilters.filter(`#${data.multiselect}`).length;
            }

            // Since Multiselect options are sideloaded via ajax, we need to check if
            // their content is loaded, to refresh the jQuery object
            if(this.multiselectFiltersLoaded === this.$multiselectFilters.length) {
                this.multiselectFiltersLoaded = true;
                this.$multiselectFilters = $(this.$multiselectFilters.get())

                if(!$.isEmptyObject(this.filters)) {
                    this.checkMultiselectOptionsFromFilters()
                }
            }
        })

        this.$body.on('UNDP.modalClosed', (evt) => {
            this.resetAllModalData()
        })

        this.multiSelectFiltersListener()
        this.removeFilterListener()
        this.clearAllFiltersListener()
    }

    resetSearch() {
        this.totalResultsLoaded = 0
        this.currentResultsPage = 1
        this.allResultsLoaded = false
        this.$searchResultsContainer[0].scrollTop = 0
    }

    resetAllModalData() {
        this.$modal.removeClass('showing-results')
        this.filters = {}
        this.jsonResults = []
        this.$searchInput.val('')
        this.loadMoreButton = null
        this.$searchResultsMetadata = null
        this.$activeFiltersContainer.html('');
        this.$mobileFilterOpen.find('.counter').text('')
        this.$multiselectFilters.find('.select-control span').text('');
        this.$multiselectFilters.find("input:checked").prop('checked', false);

        this.resetSearch()
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname
        window.history.pushState({path: newurl}, '', newurl)
        this.populateQuickLinks()
    }

    loadMoreResults() {
        if(!this.allResultsLoaded) {
            this.loadMoreButton.text('Loading more...')
            this.currentResultsPage++
            this.performSearch()
        }
    }

    setResultsWrapperHeight() {
        let baseLineHeight = this.$modal.height() - 172;

        if (Foundation.MediaQuery.is('small only')) {
            baseLineHeight = this.$modal.height() - 186;
        }

        if(baseLineHeight < this.$searchFiltersContainer.height()) {
            //this.$searchResultsWrapper.css('max-height', this.$searchFiltersContainer.outerHeight())
            this.$searchResultsContainer.css('max-height', this.$searchFiltersContainer.outerHeight())
        } else {
            //this.$searchResultsWrapper.css('max-height', baseLineHeight)
            this.$searchResultsContainer.css('max-height', baseLineHeight)
        }
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

            const $inputParent = input.closest('.options');

            const counter = $inputParent.siblings('.select-control').find('span');
            const total = $inputParent.find('input:checked').length;

            counter.text(total > 0? '(' + total + ')' : '');

            $clickedPill.remove();

            console.log(total)

            if (!this.$multiselectFilters.find('input:checked').length) {
                this.$activeFiltersContainer.html('')
            }

            this.updateFilters(input);
        });
    }

    clearAllFiltersListener() {
        this.$activeFiltersContainer.on('click', '[data-close-all-select]', (evt) => {
            evt.preventDefault();
            this.filters = {}
            this.$activeFiltersContainer.html('');
            this.$multiselectFilters.find("input:checked").prop('checked', false);

            this.$multiselectFilters.find('.select-control span').text('');
            this.$mobileFilterOpen.find('.counter').text('')
            this.addFiltersToParams()
            this.resetSearch()
            this.performSearch();
        });
    }

    showSelectedFilterPills() {
        const checkedOptions = this.$multiselectFilters.find("input:checked")
        this.$activeFiltersContainer.html('')

        if (checkedOptions.length) {
            this.$activeFiltersContainer.append('<p class="tag">Active filters:</p>')

            checkedOptions.each((i, input) => {
                const text = $(input).parent().text()
                const inputValue = $(input).val()
                this.$activeFiltersContainer.append('<a class="filter" href="#" data-remove-filter data-input-value="' + inputValue + '">' + text + '</a>')
            });

            this.$activeFiltersContainer.append('<a class="filter-clear" data-close-all-select href="#">Clear All</a>')
        }

        this.$mobileFilterOpen.find('.counter').text(checkedOptions.length > 0? `(${checkedOptions.length})` : '')

        this.setResultsWrapperHeight()
    }

    updateFilters(input) {
        // Get input type(language, content type, region, topic) from parent node
        const inputType = input.closest('[data-type]').data('type')
        const inputValue = input.val()

        if(this.filters[inputType] === undefined) {
            this.filters[inputType] = []
        }

        if (input.is(":checked")) {
            this.filters[inputType].push(inputValue)
        } else {
            const index = this.filters[inputType].indexOf(inputValue)
            if (index !== -1) {
                this.filters[inputType].splice(index, 1)
            }
        }

        this.addFiltersToParams()
        this.resetSearch()
        this.performSearch();
    }

    performSearch() {
        let searchValue = this.$searchInput.val();

        if(searchValue.length < 3 && !this.$modal.hasClass('showing-results')) {
            return false
        }

        this.setResultsWrapperHeight()

        $.ajax({
            type: 'POST',
            url: '/views/layout/navigation/modals/search-mock-backend/searchMockBackend.php',
            data: {
                search: searchValue,
                filters: this.filters,
                page: this.currentResultsPage
            },
            dataType: 'json',
            success: (response) => {
                if(this.loadMoreButton !== null) {
                    this.loadMoreButton.remove()
                }

                this.jsonResults = response.results;
                this.totalResultsLoaded += this.jsonResults.length;

                if(this.currentResultsPage === 1) {
                    this.$searchResultsContainer.html('')
                    this.$searchMetadataContainer.html('')

                    this.$searchMetadataContainer.append(`
                    <div class="search-results-metadata">
                            Showing ${this.jsonResults.length > 0? '1' : '0'}-<span class="shown-results">${this.jsonResults.length}</span> of ${response.total} results across UNDP.org for <span>${searchValue}</span>
                    </div>`)

                    this.$searchResultsMetadata = this.$searchResultsContainer.find('.search-results-metadata .shown-results')
                } else {
                    this.$searchResultsMetadata.text(this.totalResultsLoaded)
                }

                this.jsonResults.forEach((item) => {
                    this.$searchResultsContainer.append(` 
                    <div class="search-result-card">
                        <div class="tag">${item.tag !== "" ? item.tag : item.date}</div>
                        <a class="title-link" href="${item.url}">
                            <h2 class="heading h5">${item.title}</h2>
                        </a>
                        <p class="medium-copy">${item.description}</p>
                    </div>`);
                });

                if(this.totalResultsLoaded < response.total) {
                    this.loadMoreButton = $('<button class="btn blue">Load more</button>');
                    this.$searchResultsContainer.append(this.loadMoreButton)
                } else {
                    this.allResultsLoaded = true
                }
            }
        });

        this.$modal.addClass('showing-results')
        this.addFiltersToParams();
    }

    populateQuickLinks() {
        $.ajax({
            type: 'GET',
            url: '/assets/js/render-data/json-files/modals/search/quick-links.json',
            dataType: 'json',
            success: (response) => {
                this.$searchResultsContainer.html('')
                this.$searchMetadataContainer.html('')

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

    addFiltersToParams() {
        const urlParams = new URLSearchParams('');

        urlParams.set('s', this.$searchInput.val())

        for (const filter in this.filters) {
            urlParams.set(filter, this.filters[filter])
        }

        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString()
        window.history.pushState({path: newurl}, '', newurl)
    }

    getSearchFromQueryParams() {
        const urlParams = new URLSearchParams(window.location.search);

        for(let dataPair of urlParams) {
            switch(dataPair[0]) {
                case 's':
                    this.$searchInput.val(dataPair[1])
                    this.$modal.addClass('showing-results')
                    this.$body.trigger('UNDP.openSearchModal');
                    break;
                default:
                    if(this.validFilters.includes(dataPair[0])) {
                        if(dataPair[1] !== "") {
                            this.filters[dataPair[0]] = dataPair[1].split(",");
                        }
                    }
                    break
            }
        }

        if(!$.isEmptyObject(this.filters) && this.multiselectFiltersLoaded) {
            this.checkMultiselectOptionsFromFilters()
        }

        this.performSearch()
    }

    checkMultiselectOptionsFromFilters() {
        for (const filter in this.filters) {
            let $optionsList = this.$multiselectFilters.find(`[data-type="${filter}"] input[type="checkbox"]`)

            this.filters[filter].forEach(filterValue => {
                $optionsList.each((index, checkbox) => {
                    if(checkbox.value === filterValue) {
                        checkbox.checked = true;

                        const $currentMultiSelect = $(checkbox).closest('.multi-select');
                        const inputs = $currentMultiSelect.find("input:checked");
                        const counter = $currentMultiSelect.find('.select-control span');
                        const total = inputs.length;

                        counter.text('(' + total + ')');

                        return false
                    }
                })
            })
        }

        this.showSelectedFilterPills();
    }
}

export default GlobalSearch;