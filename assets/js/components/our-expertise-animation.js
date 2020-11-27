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

    animateExpertiseSection(rightSections, 'right');
    animateExpertiseSection(leftSections, 'left');

    function animateExpertiseSection(sections, side) {


        let end = "center 35%"
        let start = "top bottom-=230px"
        let position = 6


        if(side == 'right'){
            start = "bottom bottom-=10px",
            end = "center 10%"
            position = 4.7
        }

        sections.forEach(target => {
            let sectionImage = target.querySelector('.image-card');
            gsap.timeline({
                duration: 5,
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: start,
                    end: end,
                }
            }).fromTo(target, {y: 0}, {duration: 5, y: -60})
                .fromTo(sectionImage,{y: 70}, {duration: 5, y: -140}, 0)
                .from(target, {opacity: 0, duration: 1}, 0)
                .to(target, {opacity: 0, duration: 1}, position)
        });
    }
}

export default init