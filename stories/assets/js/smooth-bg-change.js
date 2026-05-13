import * as utility from './resize';

export function changeBackground(container) {
  // Register GSAP required plugins and effects.
  gsap.registerPlugin(ScrollTrigger, SlowMo);

  const bodyElement = document.body;
  const section = container || '.heading-big';
  const sectionElement = typeof section === 'string' ? document.querySelector(section) : section;
  if (!sectionElement) {
    return;
  }

  // Set Light and Dark Background colors.
  const colorDark = sectionElement.dataset.colorDark || '#232E3E';
  const colorLight = sectionElement.dataset.colorLight || '#ffffff00';
  // Calculate height for start and end trigger.
  const sectionHeight = sectionElement.offsetHeight;
  const sectionFullHeight = sectionElement.clientHeight;
  const sectionStart = `${Math.round((sectionFullHeight - sectionHeight) / 2) - 100}px`;
  const sectionEnd = `${Math.round(sectionFullHeight / 2) - 40}px`;
  const sectionStartReverse = `${Math.round((sectionFullHeight - sectionHeight) / 2) + 100}px`;
  const headerElement = document.querySelector('.header');
  const headerHeight = (headerElement ? headerElement.offsetHeight : 115) + 5;

  // Save Initial ScrollTrigger Styles.
  // ScrollTrigger.saveStyles('body');

  const stFactory = [];

  // create ScrollTrigger instance and animation
  const bgScrollAnimation = () => {
    stFactory.forEach((st) => st.kill()); // kill all existing
    stFactory.length = 0;

    // Tween for animation
    const colorToBlue = gsap.fromTo(bodyElement, { backgroundColor: colorLight, duration: 1, ease: 'SlowMo' }, { backgroundColor: colorDark, duration: 1, ease: 'SlowMo' });
    // Create ScrollTrigger instance
    stFactory.push(ScrollTrigger.create({
      trigger: sectionElement,
      start: `top+=${sectionStart} center+=${headerHeight}`,
      end: `bottom-=${sectionEnd} center+=${headerHeight}`,
      scrub: true,
      preventOverlaps: true,
      fastScrollEnd: true,
      animation: colorToBlue,
      onLeaveBack: () => gsap.to(bodyElement, { backgroundColor: colorLight, overwrite: 'auto' }),
    }));
    // Tween for animation
    const colorToWhite = gsap.fromTo(bodyElement, { backgroundColor: colorDark, duration: 1, ease: 'SlowMo' }, {
      backgroundColor: colorLight, duration: 1, ease: 'SlowMo', immediateRender: false,
    });
    // Create ScrollTrigger instance
    stFactory.push(ScrollTrigger.create({
      trigger: sectionElement,
      start: `bottom-=${sectionStartReverse} top+=${headerHeight}`,
      end: `bottom-=40px top+=${headerHeight}`,
      scrub: true,
      preventOverlaps: true,
      fastScrollEnd: true,
      animation: colorToWhite,
    }));
  };

  // init ScrollTrigger
  // let init = false;
  // if (!init) {
  bgScrollAnimation();
  //   init = true;
  // }

  // Custom windowResize;
  utility.windowResize(window, () => {
    bgScrollAnimation();
  });
}
