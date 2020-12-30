import searchData from '../data/modals/search/search'

const init = function () {
    const parentContainer = $('[data-modal-search]');
    const tagTitle = parentContainer.find(
    )
    searchData.forEach(search => {
        console.log(search.name, search.links);
        parentContainer.append(` 
            <div class="cell large-6">
                <div class="list-popular-search">
                    <h2 class="title">${ search.name }</h2>
                    <ul class="list uppercase">
                        ${search.links.map(link => {
                            return `<li><a href="${ link.url }">${ link.name }</a></li>`  
                        }).join('')}
                    </ul>
                </div>
            </div>`);
    })
}

export default init;