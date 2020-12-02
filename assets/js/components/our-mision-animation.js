import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    const $section = $(".our-mission");
    const $container = $section.find('.title-container');
    const $expertise = $('.our-expertise');

    let start = 'top center+=50px';
    let end = 'bottom+=100px top+=300px';

    if(Foundation.MediaQuery.is('medium down')){
        start = 'top center+=20px'
    }

    if(Foundation.MediaQuery.is('small only')){
        end = 'bottom+=250% center'
    }

    gsap.timeline({
        duration: 5,
        scrollTrigger: {
            trigger: $container,
            scrub: true,
            start: start,
            end: end,
            markers: true,
            onEnter: ()=>{
                $section.addClass('color-background')
            },
            onLeave: ()=>{
                $section.removeClass('color-background')
                $expertise.removeClass('hide-section');
            },
            onLeaveBack: ()=>{
                $section.removeClass('color-background')
                $expertise.addClass('hide-section');
            },
            onEnterBack: ()=>{
                $section.addClass('color-background')
            }
        }
    })
}

export default init