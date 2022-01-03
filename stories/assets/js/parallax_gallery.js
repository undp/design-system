import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function parallaxGallery(ele, yele, triggerclass) {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll(ele).forEach((e, n) => {
    var r = (n + 1) % 2 != 0;
    var o = gsap.timeline({
      scrollTrigger: {
        scrub: !0,
        ease: 'SlowMo',
        trigger: triggerclass,
        start: 'top center',
        end: 'bottom+=85 center',
      },
    });
    o.from(e, {
      y: yele * (r ? -1 : 1),
    }), o.to(e, {
      y: yele * (r ? 1 : -1),
    });
  });
}
