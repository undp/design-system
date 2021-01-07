import ModalNavHover from '../classes/ModalNavHover';
import { lazyLoad } from './lazy-load'

const init = function () {
    const modalNavHover = new ModalNavHover();
    modalNavHover.init(lazyLoad);
};

export default init;
