export function StatsSliderFun(ele){
  $(window).bind('load resize orientationChange', function () {
    if ($(window).width() <= 767) {
      new Glide(ele, {
        autoplay: false,
        gap:20,
        peek: {
          before: 0,
          after: 70
        }
      }).mount();
      $('.stats-card-parallax .grid-x .glide__slide,.stats-card-parallax .glide__slide').unwrap();
    }
  });
}
export function CardParallaxFun(){
  $(window).bind("load resize orientationchange", function () { 
    if ($(window).width() >= 768) {
      var cardWrap = $('.stats-card-grid .glide__slide');
      if(cardWrap.parent('.glide__slides').length){
        for(var i = 0; i < cardWrap.length; i+=3) {
          cardWrap.slice(i, i+3).wrapAll("<div class='stats-card-parallax'><div class='grid-x'></div></div>");
        }
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
          ease: 'SlowMo',
          trigger: n,
          start: 'top bottom',
          end: 'bottom top'
        }
        });
      });
      }
      showDemo();
    } 
  }); 
}
