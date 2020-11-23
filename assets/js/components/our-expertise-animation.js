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
    let leftSections = document.querySelectorAll(".expertise-section-left");

    animate(rightSections, 'right');
    animate(leftSections, 'left');

    function animate(sections, side) {


        let end = "center 35%"
        let start = "top bottom-=180px"

        if(side == 'right'){
            start = "bottom bottom-=20px",
            end = "center 10%"
        }

        sections.forEach(target => {
            let sectionImage = target.querySelector('.image-card');
            gsap.timeline({
                defaults: {duration: 0.5},
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: start,
                    end: end
                }
            }).fromTo(target, {y: 0}, {y: -20})
                .fromTo(sectionImage,{y: 100}, {y: -180})
                .from(target, {opacity: 0, duration: 0.2}, 0)
                .to(target, {opacity: 0, duration: 1}, '-=0.5')
        });
    }
}

export default init