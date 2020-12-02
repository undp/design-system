import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    let rightSections = document.querySelectorAll(".expertise-section-right");
    let leftSections = document.querySelectorAll(".expertise-section-left");

    animateExpertiseSection(rightSections, 'right');
    animateExpertiseSection(leftSections, 'left');

    function animateExpertiseSection(sections, side) {
        let start = "top bottom"
        let end = "bottom"
        let fromTargetY = 40
        let toTargetY = -170
        let fromImageY = 70
        let toImageY = -100


        if(side === 'right'){
            start = "top bottom"
            end = "top"
            fromTargetY = 0
            toTargetY = -60
            fromImageY = 70
            toImageY = -140
        }

        sections.forEach((target, index, array) => {
            let sectionImage = target.querySelector('.expertise-image');

            // Parallax
            gsap.timeline({
                defaults: {
                    duration: 5,
                    ease: "slow"
                },
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: start,
                    end: end
                }
            }).fromTo(target, {y: fromTargetY}, {duration: 4, y: toTargetY})
                .fromTo(sectionImage,{y: fromImageY}, {duration: 5, y: toImageY}, 0)

            // Our expertise to Trusted Partners pinned image
            if(side === 'right' && index === array.length - 1){
                let lastImageEnd = 'bottom top'

                if(Foundation.MediaQuery.is('medium down')){
                    lastImageEnd = 'bottom top-=20%'
                }

                gsap.timeline({
                    scrollTrigger: {
                        trigger: target,
                        start: "top 38%",
                        end: lastImageEnd,
                        pin: true,
                        scrub: true,
                        pinSpacing: false
                    }
                });
            }
        });
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: ".join-us-header",
            start: "top center-=30px",
            end: "bottom top",
            scrub: true,
            onEnter: ()=>{
                $('.join-us-header').addClass('in-viewport')
            },
        }
    });
}

export default init
