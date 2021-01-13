class ModalSdgs {
    constructor() {
        this.$body = $('body')
        this.$modal = $('#modal-sdgs')
        this.$openModal = $('.sdg-card')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')

        this.url = null;
        this.color = null;
        this.classHide = 'hide';
        this.classModalOpen = 'open';
        this.classBodyModalOpen = 'modal-open'
    }

    init() {
        this.listenerLoadModalData();
        this.listenerCloseModal();
    }

    listenerLoadModalData() {
        this.$openModal.click((current) => {
            this.url = $(current.currentTarget).data('url');
            this.color = $(current.currentTarget).data('color')
            this.ajax();
        })
    }

    listenerCloseModal() {
        this.$modalBtnClose.click(() => {
            this.close();
        })
    }

    open() {
        this.$body.addClass(this.classBodyModalOpen)
        this.$modal.removeClass(this.classHide).addClass(this.classModalOpen);
    }

    close() {
        this.$modal.addClass(this.classHide).removeClass(this.classModalOpen);
        // this.$modalContent.html('');
        this.$body.removeClass(this.classBodyModalOpen)
    }

    ajax() {
        $.ajax({
            type: 'GET',
            url: this.url,
            dataType: 'json',
            success: ((response) => {
                // this.$modalContent.append(`
                //     <h2 class="heading h2">${ response.title }</h2>
                // `)

                //open modal after load data
                this.open();
            })
        })
    }
}
export default ModalSdgs;