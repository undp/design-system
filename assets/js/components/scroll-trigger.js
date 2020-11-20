import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    ScrollTrigger.create({
        trigger: ".test-stick",
        start: "top top",
        end: "bottom bottom",
        pin: ".test-stick2",
    });

    gsap.set('.expertise-section', {
        opacity: 0
    })

    gsap.set('.expertise-section-2', {
        opacity: 0
    })

    gsap.set('.expertise-section-3', {
        opacity: 0
    })

    const tl = gsap.timeline( {
       scrollTrigger: {
            trigger: ".expertise-section",
            start: "top center",
            end: "bottom bottom",
            scrub: true,
            markers: false,
            toggleActions: "play reverse play reverse",
        }

    });

    const tl2 = gsap.timeline( {
        scrollTrigger: {
            trigger: ".expertise-section-2",
            start: "top center",
            end: "bottom bottom",
            scrub: true,
            markers: false,
            toggleActions: "play reverse play reverse",
        }

    });

    const tl3 = gsap.timeline( {
        scrollTrigger: {
            trigger: ".expertise-section-3",
            start: "top center",
            end: "+=500",
            scrub: true,
            markers: false,
            toggleActions: "play reverse play reverse",
        }

    });

    tl.to('.expertise-section', { opacity: 1, duration: 0.5 })
        .to('.expertise-section', { opacity: 0, duration: 0.5 }, 0.5)

    tl2.to('.expertise-section-2', { opacity: 1, duration: 0.5 })
        .to('.expertise-section-2', { opacity: 0, duration: 0.5 }, 0.5)

    tl3.to('.expertise-section-3', { opacity: 1, duration: 0.5 })
        .to('.expertise-section-3', { opacity: 0, duration: 0.5 }, 0.5)

    //gsap.to(".expertise-section", {
    //    yPercent: -100,
    //    ease: "none",
    //    scrollTrigger: {
    //        trigger: ".our-expertise",
    //        // start: "top bottom", // the default values
    //        // end: "bottom top",
    //        scrub: true
    //    },
    //});


    //ScrollTrigger.create({
    //    trigger: "#test-section",
    //    start: "top top",
    //    end: "bottom 150px",
    //    pin: "#orange-content"
    //});
}

export default init