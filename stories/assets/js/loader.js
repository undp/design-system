import { langSwitch } from './lang-switcher';
import { lightboxGallery } from './lightbox-gallery';
import { modal } from './modal';
import { tabs } from './tabs';
import { accordion } from './accordion';
import { sidebarNav, sidebarMenu } from './sidebar';
import { select } from './select';
import { expandSearch } from './expand-search';
import { navigationInitialize } from './navigation';
import { statsHover } from './stats';
import { swiper } from './swiper';
import { parallaxEffect } from './parallax';

const loader = () => {
    // Select all elements with the attribute data-undpds and convert to an array
    const undpdsElements = $('[data-undpds]').toArray();
    console.log(undpdsElements);

    // Loop through each element in the array
    undpdsElements.forEach(element => {
        // Get the value of data-undpds attribute
        const undpdsValue = $(element).attr('data-undpds');
        // Use switch statement to check the value and call appropriate functions
        switch (undpdsValue) {
            case 'data-undpds-tab':
                tabs();
                console.log('tabs');
                break;
            case 'data-undpds-expand-search':
                expandSearch($(element));
                console.log('expandSearch');      
                break;
            case 'data-undpds-select':
                select();
                console.log('select');
                break;
            case 'data-undpds-sidebar':
                sidebarNav();
                sidebarMenu();
                console.log('sidebar');
                break;
            case 'data-undpds-navigation':
                navigationInitialize();
                console.log('navigation');
                break;
            case 'data-undpds-accordion':
                accordion();
                console.log('accordion');
                break;
            case 'data-undpds-lightbox-gallery':
                lightboxGallery();
                console.log('lightboxGallery');
                break;
            case 'data-undpds-language-switcher':
                langSwitch();
                console.log('langSwitch');
                break;
            case 'data-undpds-modal':
                modal();
                console.log('modal');
                break;
            case 'data-undpds-stats-hover':
                statsHover();
                console.log('statsHover');
                break;
            case 'data-undpds-swiper':
                swiper('.parallax__content');
                parallaxEffect('.parallax-card', ['.parallax-cardimage', '.parallax-cardcontent'], 'top center', 'bottom+=85 center', 'vertical', 'desktop', 'percent');
                console.log('swiper');
                break;
            case 'data-undpds-fit-text':
                fitText('.stats-card.medium', {desktop: 110, mobile: 80});
                break;
            case 'data-undpds-swiper-fixed-carousel':
                swiper('.fixed-carousel', '.fixed-carousel__button-wrap');
                break;
            case 'data-undpds-swiper-fluid-carousel':
                swiper('.fluid-carousel', '.slide-content');
                break;
            case 'data-undpds-swiper-image-carousel':
                swiper('.image-carousel', '.slider-slide');
                break;
            case 'data-undpds-parralax-effect-images':
                parallaxEffect('.parallax-gallery-images', '.column', 'top center', 'bottom+=15% center', 'vertical', 'all');
                break;
            case 'data-undpds-expand-to-size-homepage-hero-full':
                expandToSize('.homepage-hero-full');
                break;
            case 'data-undpds-expand-to-size-page-hero-full':
                expandToSize('.pagehero-fulll');
                break;
            case 'data-undpds-swiper-page-hero-cards':
                swiper('.pagehero-cards-items')
                break;
            
            default:
                console.warn(`No function defined for ${undpdsValue}`);
        }
    });
};

export default loader;
