import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    let sections = document.querySelectorAll(".expertise-section");

    sections.forEach(target => {
        let image = $(target).find('.expertise-image');
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

export default init