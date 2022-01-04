import Glide from '@glidejs/glide';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Glide Slider start */
export function glideSlider(ele, gapele) {
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
  const glidefunction = function () {
    if ($(window).width() <= 767) {
      $('.stats-card-parallax .glide__slide').unwrap();
      glide.mount();
    } else {
      glide.destroy();
    }
  };
  $(window)
    .off('load orientationChanged', glidefunction)
    .on('load orientationChanged', glidefunction)
    .smartresize(glidefunction);
}
/* Glide Slider end */

/* Parallax Effect Vertical Position start */
export function parallaxEffect(ele, yele, triggerclass, scrubtime, cssdiv) {
  gsap.registerPlugin(ScrollTrigger);
  const parallaxfuntion = function () {
    if ($(window).width() >= 768) {
      const cardWrap = $('.stats-card-grid .glide__slide');
      if (cardWrap.parent('.glide__slides').length) {
        for (let i = 0; i < cardWrap.length; i += 3) {
          cardWrap.slice(i, i + 3).wrapAll("<div class='stats-card-parallax'></div>");
        }
      }
      // Start two row vertical parallax
      gsap.utils.toArray('.stats-card-grid').forEach((t) => {
        t.querySelectorAll('.stats-card-parallax').forEach((e, n) => {
          let num = '0';
          if ($('html').attr('dir') == 'rtl') {
            num = '1';
          }
          var r = (n + 1) % 2 != num;
          var o = gsap.timeline({
            scrollTrigger: {
              scrub: !0,
              ease: 'SlowMo',
              trigger: t,
              start: 'top bottom',
              end: 'bottom top',
            },
          });
          o.from(e, {
            xPercent: 70 * (r ? -1 : 1),
          }), o.to(e, {
            xPercent: 10 * (r ? 1 : -1),
          });
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
