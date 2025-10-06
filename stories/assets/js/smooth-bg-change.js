import * as utility from './resize';

export function changeBackground(container) {
  // Register GSAP required plugins and effects.
  gsap.registerPlugin(ScrollTrigger, SlowMo);

  const bodyElement = jQuery('body');
  const section = container || '.heading-big';
  const $section = jQuery(section);
  // Set Light and Dark Background colors.
  const colorDark = $section.data('color-dark') || '#232E3E';
  const colorLight = $section.data('color-light') || '#ffffff00';
  // Calculate height for start and end trigger
  const sectionHeight = $section.height();
  const sectionFullHeight = $section.innerHeight();
  const sectionStart = `${Math.round((sectionFullHeight - sectionHeight) / 2) - 100}px`;
  const sectionEnd = `${Math.round(sectionFullHeight / 2) - 40}px`;
  const sectionStartReverse = `${Math.round((sectionFullHeight - sectionHeight) / 2) + 100}px`;
  const headerHeight = jQuery('.header').innerHeight() + 5 || 120;

  // Save Initial ScrollTrigger Styles.
  // ScrollTrigger.saveStyles('body');

  const stFactory = [];

  // create ScrollTrigger instance and animation
  const bgScrollAnimation = () => {
    if ($section.length && stFactory.length === 0) {
      // Tween for animation
      const colorToBlue = gsap.fromTo(bodyElement, { backgroundColor: colorLight, duration: 1, ease: 'SlowMo' }, { backgroundColor: colorDark, duration: 1, ease: 'SlowMo' });
      // Create ScrollTrigger instance
      stFactory.push(ScrollTrigger.create({
        trigger: section,
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
        trigger: section,
        start: `bottom-=${sectionStartReverse} top+=${headerHeight}`,
        end: `bottom-=40px top+=${headerHeight}`,
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        animation: colorToWhite,
      }));
    } else {
      stFactory.forEach((st) => st.kill()); // kill all existing
    }
  };

  // init ScrollTrigger
  // let init = false;
  // if (!init) {
    bgScrollAnimation();
  //   init = true;
  // }

  // Custom windowResize;
  utility.windowResize(jQuery(window), (e) => {
    bgScrollAnimation();
  });
}
