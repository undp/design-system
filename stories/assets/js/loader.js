import { langSwitch } from './lang-switcher';
import { lightboxGallery } from './lightbox-gallery';
import { modal } from './modal';
import { tabs } from './tabs';
import { accordion } from './accordion';
import { sidebarNav, sidebarMenu } from './sidebar';
import { select } from './select';


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
            case 'data-undpds-carousel':
                carousel();
                break;
            case 'data-undpds-tooltip':
                tooltip();
                break;
            case 'data-undpds-tab':
                tabs();
                console.log('tabs');
                break;
            case 'data-undpds-dropdown':
                dropdown();
                break;
            case 'data-undpds-progress-bar':
                progressBar();
                break;
            case 'data-undpds-expand-search':
                expandSearch();      
                break;
            case 'data-undpds-multi-select':
                multiSelect();
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
                break;
            
                // TODO MORE COMPLEX EXAMPLES
            
            default:
                console.warn(`No function defined for ${undpdsValue}`);
        }
    });
};

export default loader;
