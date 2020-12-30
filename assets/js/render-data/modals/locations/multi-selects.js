import regions from '../../json/modals/locations/multi-select-region';
import offices from '../../json/modals/locations/multi-select.-offices';

const init = function () {
    function loadSelectItems(select, type) {
        let $parentContainer = $(`#${select} .options`);

        if (type === 'regions') {
            regions.forEach(region => {
                const regionItem = `
                <label class="checkbox-item">
                    <input type="checkbox" value="${ region.value }">
                    <span class="checkmark"></span>
                    <span class="name">${ region.name }</span>
                </label>`;
               $parentContainer.append(regionItem);
            })
        } else if (type === 'offices') {
            offices.forEach(office => {
                const regionItem = `
                <label class="checkbox-item">
                    <input type="checkbox" value="${ office.value }">
                    <span class="checkmark"></span>
                    <span class="name">${ office.name }</span>
                </label>`;
                $parentContainer.append(regionItem);
            });
        }
    }

    loadSelectItems('regions-select', 'regions')
    loadSelectItems('office-type-select', 'offices')

}

export default init