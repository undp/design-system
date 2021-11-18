/* Glide Slider start */
export function GlideSlider(ele, gapele) {
  let direc = 'ltr';
  if ($('html').attr('dir') == 'rtl') {
    direc = 'rtl';
  }
  const glide = new Glide(ele, {
    autoplay: false,
    gap: gapele,
    direction: direc,
    peek: {
      before: 0,
      after: 70,
    },
  });
  const glidefuntion = function () {
    if ($(window).width() <= 767) {
      $('.stats-card-parallax .glide__slide, .stats-card-parallax .grid-x').unwrap();
      glide.mount();
    } else {
      glide.destroy();
    }
  };
  $(window)
    .off('load orientationChanged', glidefuntion)
    .on('load orientationChanged', glidefuntion)
    .smartresize(glidefuntion);
}
/* Glide Slider end */

/* Parallax Effect Vertical Position start */
export function ParallaxEffect(ele, yele, triggerclass, scrubtime, cssdiv) {
  const parallaxfuntion = function () {
    if ($(window).width() >= 768) {
      const cardWrap = $('.stats-card-grid .glide__slide');
      if (cardWrap.parent('.glide__slides').length) {
        for (let i = 0; i < cardWrap.length; i += 3) {
          cardWrap.slice(i, i + 3).wrapAll("<div class='stats-card-parallax'><div class='grid-x'></div></div>");
        }
      }
      // Start two row vertical parallax
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.stats-card-parallax').forEach((n, index) => {
        const w = n.querySelector('.grid-x');
        const [x, xEnd] = (index % 2) ? ['100%', ((w.scrollWidth * 1.5) - n.offsetWidth) * -1] : [(w.scrollWidth) * -1, '20%'];
        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            scrub: 2,
            ease: 'SlowMo',
            trigger: n,
            duration: 5,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
      });
      // End two row vertical parallax
      gsap.to(ele, {
        y: yele,
        scrollTrigger: {
          trigger: triggerclass,
          start: 'top bottom',
          end: 'bottom top',
          scrub: scrubtime,
          ease: 'slow',
        },
      });
    } else {
      gsap.killTweensOf(ele);
      $(cssdiv).css({ transform: '' });
    }
  };
  $(window)
    .off('load orientationChanged', parallaxfuntion)
    .on('load orientationChanged', parallaxfuntion)
    .smartresize(parallaxfuntion);
}
/* Parallax Effect Vertical Position end */
