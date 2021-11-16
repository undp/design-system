export function StatsSliderFun(ele, gapele) {
  $(window).bind('load resize orientationChange', () => {
    if ($(window).width() <= 767) {
      let direc = 'ltr';
      if ($('html').attr('dir') == 'rtl') {
        direc = 'rtl';
      }
      new Glide(ele, {
        autoplay: false,
        gap: gapele,
        direction: direc,
        peek: {
          before: 0,
          after: 70,
        },
      }).mount();
      $('.stats-card-parallax .grid-x .glide__slide,.stats-card-parallax .glide__slide').unwrap();
    }
  });
}
export function CardParallaxFun() {
  $(window).bind('load resize orientationchange', () => {
    if ($(window).width() >= 768) {
      const cardWrap = $('.stats-card-grid .glide__slide');
      if (cardWrap.parent('.glide__slides').length) {
        for (let i = 0; i < cardWrap.length; i += 3) {
          cardWrap.slice(i, i + 3).wrapAll("<div class='stats-card-parallax'><div class='grid-x'></div></div>");
        }
      }
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.stats-card-parallax').forEach((n, index) => {
        const w = n.querySelector('.grid-x');
        const [x, xEnd] = (index % 2) ? ['100%', ((w.scrollWidth * 1.5) - n.offsetWidth) * -1] : [(w.scrollWidth) * -1, '16%'];
        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            scrub: !0,
            ease: 'SlowMo',
            trigger: n,
            duration: 5,
          },
        });
      });
    }
  });
}

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
