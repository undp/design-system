//import Glide from "../components/sdg-stat-cards-slider-mobile";
import Glide from '@glidejs/glide/';
class ModalSdgs {
    constructor() {
        this.$body = $('body')
        this.$modal = $('#modal-sdgs')
        this.$openModal = $('.sdg-card')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')
        this.$glideExpertiseSection = $('.sdg-stat-cards-slider')

        this.url = null;
        this.color = null;
        this.classBodyModalOpen = 'modal-open'

        this.$sdgDeepDiveHero = $('.sdg-deep-dive-hero');
    }

    init() {
        this.listenerLoadModalData();
        this.listenerCloseModal();
    }

    listenerLoadModalData() {
        this.$openModal.click((current) => {
            this.url = $(current.currentTarget).data('url');
            this.color = $(current.currentTarget).data('color')

            this.open();
            this.createSlider();
            this.addColorClass();
        })
    }

    listenerCloseModal() {
        this.$modalBtnClose.click(() => {
            this.close();
        })
    }

    open() {
        this.$modal.removeClass('hide');
        this.$body.addClass(this.classBodyModalOpen)
    }

    close() {
        this.$modal.addClass('hide');
        this.$body.removeClass(this.classBodyModalOpen)
    }

    ajax() {
        $.ajax({
            type: 'GET',
            url: this.url,
            dataType: 'json',
            success: ((response) => {
                this.open();
                this.createSlider();
            })
        })
    }

    addColorClass(){
        this.$sdgDeepDiveHero.find('.title').addClass(this.color);
        this.$sdgDeepDiveHero.find('.description-container').addClass(this.color);
        this.$modal.find('.stat-card').addClass('sdg ' +  this.color);
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