import ModalPublicationDownload from "../classes/ModalPublicationDownload";


const init = function () {

    const $modal = $('.modal-publication-download')

    if ($modal.length) {
        const modalPublications = new ModalPublicationDownload();
        modalPublications.init();
    }
}


export default init;
