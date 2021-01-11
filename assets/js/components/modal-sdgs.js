class ModalSdgs {
    constructor() {
        this.$openModal = $('.sdg-card');
        this.$modal = $('#modal-sdgs')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')

        this.$url = null;
    }

    init() {
        this.listenerOpenModal();
        this.listenerCloseModal();
    }

    listenerOpenModal() {
        this.$openModal.click((current) => {
            console.log(current.currentTarget);
            this.$url = $(current.currentTarget).data('url');
            this.open();
        })
    }

    listenerCloseModal() {
        this.$modalBtnClose.click(() => {
            this.close();
        })
    }

    open() {
        this.ajax();
        this.$modal.removeClass('hide');
    }

    close() {
        this.$modal.addClass('hide');
        this.$modalContent.html('');
    }

    ajax() {
        $.ajax({
            type: 'GET',
            url: this.$url,
            dataType: 'json',
            success: ((response) => {
                this.$modalContent.append(`
                    <h2 class="heading h2">${response.title}</h2>
                    <div class="${response.color}"></div>
                `)
            })
        })
    }
}

const init = function () {
    const modalSdgs = new ModalSdgs();
    modalSdgs.init();
}

export default init;