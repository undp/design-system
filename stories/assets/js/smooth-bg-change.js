import * as utility from './resize';

export function changeBackground(container) {
  // Register GSAP required plugins and effects.
  gsap.registerPlugin(ScrollTrigger, SlowMo);

  const bodyElement = jQuery('body');
  const section = container || '.heading-big';
  // Set Light and Dark Background colors.
  const colorDark = '#232E3E';
  const colorLight = '#ffffff';
  // Calculate height for start and end trigger
  const sectionHeight = jQuery('.heading-big').height();
  const sectionFullHeight = jQuery('.heading-big').innerHeight();
  const sectionStart = `${Math.round((sectionFullHeight - sectionHeight) / 2) - 100}px`;
  const sectionEnd = `${Math.round(sectionFullHeight / 2) - 40}px`;
  const sectionStartReverse = `${Math.round((sectionFullHeight - sectionHeight) / 2) + 100}px`;
  const headerHeight = jQuery('.header').innerHeight() + 5 || 120;

  // Save Initial ScrollTrigger Styles.
  ScrollTrigger.saveStyles('body');

  // create ScrollTrigger instance and animation
  const bgScrollAnimation = () => {
    if (jQuery(section).length) {
      // Tween for animation
      const colorToBlue = gsap.fromTo(bodyElement, { backgroundColor: colorLight, duration: 1, ease: 'SlowMo' }, { backgroundColor: colorDark, duration: 1, ease: 'SlowMo' });
      // Create ScrollTrigger instance
      ScrollTrigger.create({
        trigger: section,
        start: `top+=${sectionStart} center+=${headerHeight}`,
        end: `bottom-=${sectionEnd} center+=${headerHeight}`,
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        animation: colorToBlue,
        onLeaveBack: () => gsap.to(bodyElement, { backgroundColor: colorLight, overwrite: 'auto' }),
      });
      // Tween for animation
      const colorToWhite = gsap.fromTo(bodyElement, { backgroundColor: colorDark, duration: 1, ease: 'SlowMo' }, {
        backgroundColor: colorLight, duration: 1, ease: 'SlowMo', immediateRender: false,
      });
      // Create ScrollTrigger instance
      ScrollTrigger.create({
        trigger: section,
        start: `bottom-=${sectionStartReverse} top+=${headerHeight}`,
        end: `bottom-=40px top+=${headerHeight}`,
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        animation: colorToWhite,
      });
    }
  };

  // init ScrollTrigger
  let init = false;
  if (!init) {
    bgScrollAnimation();
    init = true;
  }

  // Custom windowResize;
  utility.windowResize(jQuery(window), (e) => {
    bgScrollAnimation();
  });
}
