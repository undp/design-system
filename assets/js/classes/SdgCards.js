class SdgCards {
    constructor() {
        this.$btnLoad = $('[data-sdg-load]');
        this.$container = $('[data-sdg-container]');
        this.$arrowRed = $('[data-arrow-red-secondary]')
    }

    init() {
        this.listenerLoadMore();
    }

    listenerLoadMore() {
        this.$btnLoad.click(() => {
            this.append()
        });
    }

    append() {
        $.ajax({
            type: 'GET',
            url: `/assets/js/render-data/json/sdgs/sdg-in-action.json`,
            dataType: 'json',
            success: ((response) => {
                response.forEach(item => {
                    this.$container.append(`
                        <div class="cell medium-6 large-4">
                            <a href="#">
                            <div class="single-content-card-body">
                                 <div class="card-content">
                                     <div class="tag">${ item.tag }</div>
                                     <div class="title">
                                         <h4 class="heading h5">${ item.title }</h4>
                                     </div>
                                     <div class="description">
                                         <p class="medium-copy">${ item.description }</p>
                                     </div>
                                     <div class="cta">
                                         <div class="text-link arrow-2">
                                             <span>${ item.cta }</span>
                                             ${ this.$arrowRed.html() }
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </a>
                        </div>
                    `);
                })
            })
        })
    }
}

export default SdgCards;
