import Glide from '@glidejs/glide/';
import { tns } from 'tiny-slider/src/tiny-slider'
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
        this.listnerOpenModal();
        this.listenerCloseModal();
        this.listenerWindowClick();
        this.listenerKeyPress();
    }

    listnerOpenModal() {
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
        this.$modalContent.animate( { scrollTop : 0 }, 800 );
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

        let slider = tns({
            container: '.sdg-stat-cards-slider',
            "autoWidth": true,
            "items": 3.3,
            "gutter": 10,
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 400,
            "controls": false,
            "navAsThumbnails": true
        });
    }
}
export default ModalSdgs;