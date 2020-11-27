import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    let rightSections = document.querySelectorAll(".expertise-section-right");
    let leftSections = document.querySelectorAll(".expertise-section-left");

    animateExpertiseSection(rightSections, 'right');
    animateExpertiseSection(leftSections, 'left');

    function animateExpertiseSection(sections, side) {

        sections.forEach(target => {
            let sectionImage = target.querySelector('.image-card');
             let image = $(target).find('.image-card');
            gsap.timeline({
                defaults: {
                    duration: 2,
                    ease: "slow"
                },
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: "center bottom",
                    end: "bottom top+=300px",
                    markers: side == "right",
                    onEnter: ()=>{
                        if(image.length){
                            image.addClass('visible')
                        }
                    },
                    onLeave: ()=>{
                        if(image.length){
                            image.addClass('in-visible')
                        }
                    },
                    onEnterBack: ()=>{
                        if(image.length){
                            image.removeClass('in-visible').addClass('visible')
                        }
                    },
                    onLeaveBack: ()=>{
                        if(image.length){
                            image.removeClass('visible').removeClass('in-visible')
                        }
                    }
                }
            })
        });
    }
}

export default init