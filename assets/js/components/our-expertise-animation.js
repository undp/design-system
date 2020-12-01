import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    let rightSections = document.querySelectorAll(".expertise-section-right");
    let leftSections = document.querySelectorAll(".expertise-section-left");

    animateExpertiseSection(rightSections, 'right');
    animateExpertiseSection(leftSections, 'left');

    function animateExpertiseSection(sections, side) {
        let start = "top bottom-=230px"
        let end = "bottom 55%"
        let fromTargetY = 40
        let toTargetY = -170
        let fromImageY = 70
        let toImageY = -100


        if(side == 'right'){
            start = "bottom bottom-=10px",
            end = "top 10%"
            fromTargetY = 0
            toTargetY = -60
            fromImageY = 70
            toImageY = -140
        }

        sections.forEach((target, index, array) => {
            if(side === 'right' && index === array.length - 1){
                let lastImageEnd = 'bottom top+=150px'

                if(Foundation.MediaQuery.is('medium down')){
                    lastImageEnd = 'bottom top-=10%'
                }

                gsap.timeline({
                    scrollTrigger: {
                        trigger: target,
                        start: "top top+=400px",
                        end: lastImageEnd,
                        pin: true,
                        scrub: true,
                        pinSpacing: false,
                    }
                });
            }


            let sectionImage = target.querySelector('.expertise-image');

            gsap.timeline({
                defaults: {
                    duration: 5,
                    ease: "slow"
                },
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: start,
                    end: end,
                }
            }).fromTo(target, {y: fromTargetY}, {duration: 4, y: toTargetY})
                .fromTo(sectionImage,{y: fromImageY}, {duration: 5, y: toImageY}, 0)
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