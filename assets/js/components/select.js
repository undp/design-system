import Select from "../classes/Select";

const init = function () {
    const selects = $('[data-select]')

    selects.each((i, select) => {
        const selectInstance = new Select(select)
        selectInstance.init()
    })
}

export default init;
