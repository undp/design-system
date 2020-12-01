import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    let sections = document.querySelectorAll(".expertise-section-image");

    sections.forEach((target, index, array) => {
        let image = $(target).find('.expertise-image');
        let isLastElement = false

        if(index === array.length - 1){
            isLastElement = true;

            gsap.timeline({
                scrollTrigger: {
                    trigger: target,
                    start: "top top+=300px",
                    end: "bottom top+=190px",
                    pin: true,
                    scrub: true,
                    pinSpacing: false,
                }
            });
        }

        gsap.timeline({
            defaults: {
                duration: 2,
                ease: "slow"
            },
            scrollTrigger: {
                trigger: target,
                scrub: true,
                start: 'center bottom',
                end: () => {
                    return index === sections.length - 1 ? 'bottom top+=180px' : 'bottom top+=300px';
                },
                onEnter: ()=>{
                    if(image.length){
                        image.addClass('visible')
                    }
                },
                onLeave: ()=>{
                    if(image.length && !isLastElement){
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

export default init