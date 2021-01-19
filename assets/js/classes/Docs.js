class Docs {
    constructor() {
        this.$current = null;
        this.docIdRef = $('[data-doc-id]');
        this.docs = $('[data-parent-docs] > div');
        this.menuHamburger = $('[data-doc-hamburger]');

        this.classHide = 'hide';
        this.classMenuActive = 'is-active';
    }

    init() {
        this.listenerHamburger();
        this.listenerOpenDoc();
    }

    listenerHamburger() {
        this.menuHamburger.click(menu => {
            $(menu.currentTarget).toggleClass(this.classMenuActive)
        })
    }

    listenerOpenDoc() {
        this.docIdRef.click(($current) => {
            let docId = $($current.currentTarget).data('doc-id');
            this.$current = $(`#${docId}`)
            if(this.$current) {
                this.closeAll();
                $($current.currentTarget).addClass(this.classMenuActive);
                this.open();
            }
        })
    }

    closeAll() {
        this.docs.addClass(this.classHide);
        this.docIdRef.removeClass(this.classMenuActive);
    }

    open() {
        this.$current.removeClass(this.classHide);
    }
}

export default Docs;