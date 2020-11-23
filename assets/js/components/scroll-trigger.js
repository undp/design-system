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

    let rightSections = document.querySelectorAll(".expertise-section-right");

    rightSections.forEach((target, key) => {
        let sectionImage = target.querySelector('.image-card');
        gsap.timeline({
            defaults: {duration: 1},
            scrollTrigger: {
                trigger: target,
                scrub: true,
                start: "bottom bottom-=20px",
                end: "center 10%"
            }
        }).fromTo(target, {y: 0}, {y: -20})
            .fromTo(sectionImage,{y: 200}, {y: -180})
            .from(target, {opacity: 0, duration: 0.2}, 0)
            .to(target, {opacity: 0, duration: 1}, '-=0.5')
    });

    let leftSections = document.querySelectorAll(".expertise-section-left");

    leftSections.forEach(target => {
        let sectionImage = target.querySelector('.image-card');
        gsap.timeline({
            defaults: {duration: 1},
            scrollTrigger: {
                trigger: target,
                scrub: true,
                start: "top bottom-=180px",
                end: "center 35%"
            }
        }).fromTo(target, {y: 0}, {y: -20})
            .fromTo(sectionImage,{y: 100}, {y: -180})
            .from(target, {opacity: 0, duration: 0.2}, 0)
            .to(target, {opacity: 0, duration: 1}, '-=0.5')
    });
}

export default init