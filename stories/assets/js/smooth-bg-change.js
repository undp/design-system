export function changeBackground(body, container) {
  // Register GSAP required plugins and effects.
  gsap.registerPlugin(ScrollTrigger);

  const $section = $(container);
  const $startTrigger = $section.find("h2");
  let $endPoint;

  const $windowWidth = $(window).width();
  const breakpoint = window.UNDP.breakpoints.TABLET || 834;
  if ($windowWidth > breakpoint) {
    $endPoint = ($(container).innerHeight() - 500 )+'px';
  } else {
    $endPoint = ($(container).innerHeight() - 200 )+'px';
  }

  const colorToBlue = gsap.fromTo(body, { backgroundColor: "#ffffff" },{ backgroundColor: "#232E3E" })

  ScrollTrigger.create({
    trigger: $startTrigger,
    start: "top-=500px top+=200px",
    end: "+=500px",
    scrub: true,
    animation: colorToBlue,
    onLeaveBack: () =>
     gsap.to(body, { backgroundColor: "white", overwrite: "auto" })
  });

  const colorToWhite= gsap.fromTo(body, { backgroundColor: "#232E3E" },{ backgroundColor: "#ffffff", immediateRender: false })

  ScrollTrigger.create({
    trigger: $startTrigger,
    start: "bottom top-=50px",
    end: $endPoint,
    scrub: true,
    animation: colorToWhite,
  });
}
