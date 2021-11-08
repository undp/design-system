export function StatsSliderFun(){
  $(window).bind("load resize", function () {
    if ($(window).width() < 768) {
      new Glide('.stats-card-slider', {
        autoplay: false,
        gap:20,
        peek: {
          before: 0,
          after: 70
        }
      }).mount();
    }
  });
}

export function CardParallaxFun(){
    if ($(window).width() > 767) {
      var divs = $(".stats-card-grid .glide__slide");
      for(var i = 0; i < divs.length; i+=3) {
          divs.slice(i, i+3).wrapAll("<div class='grid-x'></div>");
      }
      gsap.registerPlugin(ScrollTrigger);
      const showDemo = () => {
      gsap.utils.toArray('.stats-card-parallax').forEach((n, index) => {
          const w = n.querySelector('.grid-x');
          const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - n.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
          gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: {
              scrub: !0,
              ease: "SlowMo",
              trigger: n,
              start: "top bottom",
              end: "bottom top"
          }
          });
      });
      }
      showDemo();
    }
}