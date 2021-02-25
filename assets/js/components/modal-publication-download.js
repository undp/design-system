import ModalPublicationDownload from "../classes/ModalPublicationDownload";


const init = function () {

    const $modal = $('.modal-publication-download')

    if ($modal.length) {
        $modal.each(function () {
            const modalPublications = new ModalPublicationDownload(this);
            modalPublications.init();
        })
    }
}


export default init;
