
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
                Promise.try(() => import('./tabs'))
                    .then(tabs => tabs.tabs())
                    .catch(error => console.error('Error loading tabs:', error));
                break;

            case 'data-undpds-expand-search':
                Promise.try(() => import('./expand-search'))
                    .then(expandSearch => expandSearch.expandSearch($(element)))
                    .catch(error => console.error('Error loading expandSearch:', error));
                break;

            case 'data-undpds-select':
                Promise.try(() => import('./select'))
                    .then(select => select.select())
                    .catch(error => console.error('Error loading select:', error));
                break;

            case 'data-undpds-sidebar':
                Promise.try(() => import('./sidebar'))
                    .then(sidebarNav => {
                        sidebarNav.sidebarNav();
                        sidebarNav.sidebarMenu();
                    })
                    .catch(error => console.error('Error loading sidebarNav:', error));
                break;

            case 'data-undpds-navigation':
                Promise.try(() => import('./navigation'))
                    .then(navigationInitialize => navigationInitialize.navigationInitialize())
                    .catch(error => console.error('Error loading navigationInitialize:', error));
                break;

            case 'data-undpds-accordion':
                Promise.try(() => import('./accordion'))
                    .then(accordion => accordion.accordion())
                    .catch(error => console.error('Error loading accordion:', error));
                break;

            case 'data-undpds-lightbox-gallery':
                Promise.try(() => import('./lightbox-gallery'))
                    .then(lightboxGallery => lightboxGallery.lightboxGallery())
                    .catch(error => console.error('Error loading lightboxGallery:', error));
                break;

            case 'data-undpds-language-switcher':
                Promise.try(() => import('./lang-switcher'))
                    .then(langSwitch => langSwitch.langSwitch())
                    .catch(error => console.error('Error loading langSwitch:', error));
                break;

            case 'data-undpds-modal':
                Promise.try(() => import('./modal'))
                    .then(modal => modal.modal())
                    .catch(error => console.error('Error loading modal:', error));
                break;

            case 'data-undpds-stats-hover':
                Promise.try(() => import('./stats'))
                    .then(statsHover => statsHover.statsHover())
                    .catch(error => console.error('Error loading statsHover:', error));
                break;

            case 'data-undpds-swiper':
                Promise.try(() => Promise.all([import('./swiper'), import('./parallax')]))
                    .then(([swiper, parallaxEffect]) => {
                        swiper.swiper('.parallax__content');
                        parallaxEffect.parallaxEffect(
                            '.parallax-card',
                            ['.parallax-cardimage', '.parallax-cardcontent'],
                            'top center',
                            'bottom+=85 center',
                            'vertical',
                            'desktop',
                            'percent'
                        );
                    })
                    .catch(error => console.error('Error loading swiper or parallaxEffect:', error));
                break;

            case 'data-undpds-fit-text':
                Promise.try(() => import('./fitText'))
                    .then(fitText => fitText.fitText('.stats-card.medium', { desktop: 110, mobile: 80 }))
                    .catch(error => console.error('Error loading fitText:', error));
                break;

            case 'data-undpds-swiper-fixed-carousel':
                Promise.try(() => import('./swiper'))
                    .then(swiperCarousel => swiperCarousel.swiper('.fixed-carousel', '.fixed-carousel__button-wrap'))
                    .catch(error => console.error('Error loading swiperCarousel:', error));
                break;

            case 'data-undpds-swiper-fluid-carousel':
                Promise.try(() => import('./swiper'))
                    .then(swiperFluidCarousel => swiperFluidCarousel.swiper('.fluid-carousel', '.slide-content'))
                    .catch(error => console.error('Error loading swiperFluidCarousel:', error));
                break;

            case 'data-undpds-swiper-image-carousel':
                Promise.try(() => import('./swiper'))
                    .then(swiperImageCarousel => swiperImageCarousel.swiper('.image-carousel', '.slider-slide'))
                    .catch(error => console.error('Error loading swiperImageCarousel:', error));
                break;

            case 'data-undpds-parralax-effect-images':
                Promise.try(() => import('./parallax'))
                    .then(parallaxEffectImages => parallaxEffectImages.parallaxEffect(
                        '.parallax-gallery-images',
                        '.column',
                        'top center',
                        'bottom+=15% center',
                        'vertical',
                        'all'
                    ))
                    .catch(error => console.error('Error loading parallaxEffectImages:', error));
                break;

            case 'data-undpds-expand-to-size-homepage-hero-full':
                Promise.try(() => import('./animation'))
                    .then(expandToSize => expandToSize.expandToSize('.homepage-hero-full'))
                    .catch(error => console.error('Error loading expandToSize:', error));
                break;

            case 'data-undpds-expand-to-size-page-hero-full':
                Promise.try(() => import('./animation'))
                    .then(expandToSizePageHero => expandToSizePageHero.expandToSize('.pagehero-full'))
                    .catch(error => console.error('Error loading expandToSizePageHero:', error));
                break;

            case 'data-undpds-swiper-page-hero-cards':
                Promise.try(() => import('./swiper'))
                    .then(swiperPageHeroCards => swiperPageHeroCards.swiper('.pagehero-cards-items'))
                    .catch(error => console.error('Error loading swiperPageHeroCards:', error));
                break;

            default:
                console.warn(`No function defined for ${undpdsValue}`);
        }
    });
};

export default loader;
