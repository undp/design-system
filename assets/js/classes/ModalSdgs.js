import Glide from '@glidejs/glide/';

class ModalSdgs {
    constructor() {
        this.$body = $('body')
        this.$window = $(window);
        this.$modal = $('#modal-sdgs')
        this.$openModal = $('.sdg-card')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')

        this.url = null;
        this.color = null;
        this.classHide = 'hide';
        this.classModalOpen = 'open';
        this.classBodyModalOpen = 'modal-open'

        this.$sdgDeepDiveHero = $('.sdg-deep-dive-hero');
        this.$glideExpertiseSection = $('.sdg-stat-cards-slider');
    }

    init() {
        this.listenerLoadModalData();
        this.listenerCloseModal();
        this.listenerWindowClick();
        this.listenerKeyPress();
    }

    listenerLoadModalData() {
        this.$openModal.click((current) => {
            this.url = $(current.currentTarget).data('url');
            this.color = $(current.currentTarget).data('color')
            this.open();
            this.addColorClass();
            this.createSlider();
        })
    }

    listenerCloseModal() {
        this.$modalBtnClose.click(() => {
            this.close();
        })
    }

    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$modal.has(evt.target).length &&
                this.$modal.hasClass(this.classModalOpen) &&
                !this.$modalContent.has(evt.target).length) {
                this.close();
            }
        });
    }

    listenerKeyPress() {
        this.$window.keyup((e) => {
            if (e.keyCode === 27) { //esc
                this.close()
            }
        });
    }


    open() {
        this.$body.addClass(this.classBodyModalOpen)
        this.$modal.removeClass(this.classHide).addClass(this.classModalOpen);
    }

    close() {
        this.$modal.addClass(this.classHide).removeClass(this.classModalOpen);
        this.$body.removeClass(this.classBodyModalOpen)
        this.removeColorClass();
    }

    addColorClass(){
        this.$sdgDeepDiveHero.find('.title').addClass(this.color);
        this.$sdgDeepDiveHero.find('.description-container').addClass(this.color);
        this.$modal.find('.stat-card').addClass('sdg ' +  this.color);
        this.$modal.find('.single-content-card-accent-color').addClass('sdg ' +  this.color);
    }

    removeColorClass(){
        this.$sdgDeepDiveHero.find('.title').removeClass(this.color);
        this.$sdgDeepDiveHero.find('.description-container').removeClass(this.color);
        this.$modal.find('.stat-card').removeClass('sdg ' +  this.color);
        this.$modal.find('.single-content-card-accent-color').removeClass('sdg ' +  this.color);
    }

    createSlider(){

        if(this.$glideExpertiseSection.length){
            const $controlSlider = this.$glideExpertiseSection.find('.control-slider')
            const numberOfSlides = this.$glideExpertiseSection.find('.glide__slide').length
            const slideWidth = 100/numberOfSlides;

            $controlSlider.css('width', slideWidth + "%")

            const glideExpertise = new Glide('.sdg-stat-cards-slider', {
            });

            glideExpertise.on(['mount.after', 'run'], () => {
                $controlSlider.css('left', (glideExpertise.index*slideWidth) + "%")
            })

            glideExpertise.mount();
        }
    }
}
export default ModalSdgs;