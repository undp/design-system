export function parallaxGalleryFun(ele, yele, triggerclass) {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll(ele).forEach(((e, n) => {
    var r = (n + 1) % 2 != 0;
    var o = gsap.timeline({
      scrollTrigger: {
        scrub: !0,
        ease: 'SlowMo',
        trigger: triggerclass,
        start: 'top center',
        end: 'bottom+=15% center',
      },
    });
    o.from(e, {
      yPercent: yele * (r ? -1 : 1),
    }), o.to(e, {
      yPercent: yele * (r ? 1 : -1),
    });
  }));
}
