import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    ScrollTrigger.create({
        trigger: ".sticky-container",
        start: "top top",
        end: "bottom center",
        pin: ".sticky-content",
    });

    //const sections = gsap.utils.toArray('.expertise-section')
    //
    //sections.forEach(section => {
    //    gsap.set(section, {
    //        opacity: 0
    //    })
    //
    //    gsap.timeline( {
    //       scrollTrigger: {
    //            trigger: section,
    //            start: "top center",
    //            end: "bottom bottom",
    //            scrub: true,
    //            toggleActions: "play reverse play reverse",
    //        }
    //
    //    });
    //
    //    gsap.to(section, { opacity: 1, duration: 0.5 })
    //
    //
    //})


    let rightSections = document.querySelectorAll(".expertise-section-right");

    rightSections.forEach(target => {
        gsap.timeline({
            defaults: {duration: 1},
            scrollTrigger: {
                trigger: target,
                scrub: true,
                start: "center 90%",
                end: "center 50%",
                markers: true
            }
        }).fromTo(target, {y: -50}, {y: 0})
            .from(target, {opacity: 0, duration: 0.2}, 0)
            .to(target, {opacity: 0, duration: 0.2}, 0.8)
    });

    let leftSections = document.querySelectorAll(".expertise-section-left");

    leftSections.forEach(target => {
        gsap.timeline({
            defaults: {duration: 1},
            scrollTrigger: {
                trigger: target,
                scrub: true,
                start: "bottom bottom",
                end: "center 55%",
            }
        }).fromTo(target, {y: -50}, {y: 0})
            .from(target, {opacity: 0, duration: 0.2}, 0)
            .to(target, {opacity: 0, duration: 0.2}, 0.9)
    });


    //
    //gsap.set('.expertise-section', {
    //    opacity: 0
    //})
    //
    //gsap.set('.expertise-section-2', {
    //    opacity: 0
    //})
    //
    //gsap.set('.expertise-section-3', {
    //    opacity: 0
    //})
    //
    //const tl = gsap.timeline( {
    //   scrollTrigger: {
    //        trigger: ".expertise-section",
    //        start: "top center",
    //        end: "bottom bottom",
    //        scrub: true,
    //        markers: false,
    //        toggleActions: "play reverse play reverse",
    //    }
    //
    //});
    //
    //const tl2 = gsap.timeline( {
    //    scrollTrigger: {
    //        trigger: ".expertise-section-2",
    //        start: "top center",
    //        end: "bottom bottom",
    //        scrub: true,
    //        markers: false,
    //        toggleActions: "play reverse play reverse",
    //    }
    //
    //});
    //
    //const tl3 = gsap.timeline( {
    //    scrollTrigger: {
    //        trigger: ".expertise-section-3",
    //        start: "top center",
    //        end: "+=500",
    //        scrub: true,
    //        markers: false,
    //        toggleActions: "play reverse play reverse",
    //    }
    //
    //});
    //
    //tl.to('.expertise-section', { opacity: 1, duration: 0.5 })
    //    .to('.expertise-section', { opacity: 0, duration: 0.5 }, 0.5)
    //
    //tl2.to('.expertise-section-2', { opacity: 1, duration: 0.5 })
    //    .to('.expertise-section-2', { opacity: 0, duration: 0.5 }, 0.5)
    //
    //tl3.to('.expertise-section-3', { opacity: 1, duration: 0.5 })
    //    .to('.expertise-section-3', { opacity: 0, duration: 0.5 }, 0.5)

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

    //const parallaxContainer = gsap.utils.toArray('.test-stick')
    //
    //
    //parallaxContainer.forEach(section => {
    //
    //    section
    //        .querySelectorAll('.our-expertise-row')
    //        .forEach(bg => {
    //            gsap.to(bg, {
    //                yPercent: -50,
    //                ease: "none",
    //                scrollTrigger: {
    //                    scrub: true,
    //                    start: "top top",
    //                    trigger: section,
    //                    markers: true
    //                },
    //                onStart: () => console.log('entro')
    //            })
    //        })
    //})
}

export default init