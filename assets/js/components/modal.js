import Modal from "../classes/Modal";


const init = function () {

    const $modals = $('[data-modal]')

    if ($modals.length) {

        $modals.each(function () {
            const modal = new Modal(this)
            modal.init()
        })
    }
}

export default init
