export function changeBackground(body, container) {
  // Register GSAP required plugins and effects.
  gsap.registerPlugin(ScrollTrigger);

  let $startTrigger = $(container).find('h2');
  let $endPoint;

  const $windowWidth = $(window).width();
  const breakpoint = window.UNDP.breakpoints.TABLET || 834;
  if ($windowWidth > breakpoint) {
    $endPoint = ($(container).outerHeight() - 500 )+'px';
  } else {
    $endPoint = ($(container).outerHeight() + 250 )+'px';
  }

  if(!$(container).length) return false;

  let blueToWhiteScroll = null,
    blueToWhite = null

  function createScrollsWhiteToBlue(){
    gsap.utils.toArray('.heading-big').forEach((section, i) => {
      if(section.getAttribute('data-color') !== null) {
        var colorAttr = section.getAttribute('data-color')
        
        gsap.to(body, {
          backgroundColor: colorAttr === "blue" ? gsap.getProperty("html", "--blue") : gsap.getProperty("html", "--light"),
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start:'top+=40% bottom',
            end: '+=400px',
            onEnter: () => $(body).addClass('change-background'),
            onLeaveBack: () => $(body).removeClass('change-background')
          }
        });
      }
    });
  }
  
  function createScrollsBlueToWhite() {
    let startBlueToWhite = $blueToWhitebegin

    blueToWhite = gsap.fromTo('body',
      { backgroundColor: "#232E3E" },
      { backgroundColor: "#ffffff",
          immediateRender: false })
     
      blueToWhiteScroll = ScrollTrigger.create({
      trigger: $startTrigger,
      start: "bottom top+=200px",
      end: $endPoint,
      scrub: true,
      animation: blueToWhite,
      onEnter: () => $(body).removeClass('change-background'),
      onLeaveBack: () => $(body).addClass('change-background')
    });
  }
  createScrollsWhiteToBlue();
  createScrollsBlueToWhite();
}
