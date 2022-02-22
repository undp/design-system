import * as utility from './resize';

export function changeBackground(container) {

  'use strict';

  gsap.registerPlugin(ScrollTrigger, SlowMo);

  const bodyElement = $('body');
  const section = container || '.heading-big';
  // Set Light and Dark Background colors.
  const colorDark = "#232E3E";
  const colorLight = "#ffffff";
  // Calculate height for start and end trigger
  const sectionHeight = $('.heading-big').height();
  const sectionFullHeight = $('.heading-big').innerHeight();
  const sectionStart = Math.round((sectionFullHeight - sectionHeight) / 2) + 40 + 'px';
  const sectionEnd = Math.round(sectionFullHeight / 2) - 40 + 'px';
  const sectionStartReverse = Math.round((sectionFullHeight - sectionHeight) / 2) - 40 + 'px';
  const headerHeight = $('.header').innerHeight() + 5 || 120;

  // Save Initial ScrollTrigger Styles.
  ScrollTrigger.saveStyles("body");

  // create ScrollTrigger instance and animation
  const bgScrollAnimation = () => {
    if ($(section).length) {
      // Tween for animation
      const colorToBlue = gsap.fromTo(bodyElement, { backgroundColor: colorLight, duration: 1, ease: 'SlowMo' },{ backgroundColor: colorDark, duration: 1, ease: 'SlowMo' });
      // Create ScrollTrigger instance
      ScrollTrigger.create({
        trigger: section,
        start: 'top+='+sectionStart+' center+='+headerHeight,
        end: 'bottom-='+sectionEnd+' center+='+headerHeight,
        scrub: true,
        markers: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        animation: colorToBlue,
        onLeaveBack: () => gsap.to(bodyElement, { backgroundColor: colorLight, overwrite: "auto" }),
      });
      // Tween for animation
      const colorToWhite= gsap.fromTo(bodyElement, { backgroundColor: colorDark, duration: 1, ease: 'SlowMo' },{ backgroundColor: colorLight, duration: 1, ease: 'SlowMo', immediateRender: false });
      // Create ScrollTrigger instance
      ScrollTrigger.create({
        trigger: section,
        start: 'bottom-='+sectionStartReverse+' top+='+headerHeight,
        end: 'bottom-=40px top+='+headerHeight,
        scrub: true,
        markers: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        animation: colorToWhite,
      });
    }
  }

  // init ScrollTrigger
  let init = false;
  if (!init) {
    bgScrollAnimation();
    init = true;
  }

  // Custom windowResize;
  utility.windowResize($(window), (e) => {
    bgScrollAnimation();
  });

}
