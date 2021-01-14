import Appear from 'appear/dist/appear'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const init = function () {
    const trackClass = 'scroll-track'
    const visibleClass = 'in-viewport'

    appear({
        elements: () => {
            return document.getElementsByClassName(trackClass)
        },
        appear: (el) => {
            $(el).addClass(visibleClass)
        },
        bounds: 100,
        reappear: true
    })


    //SDG Cards trigger
    let $cards = $('.sdg-card');

    $cards.each((index, target)=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: 'bottom bottom',
                scrub: true,
                invalidateOnRefresh: false,
                onEnter: ()=>{
                    $(target).find('.track').addClass('in-viewport');
                }
            }
        });
    })
}

export default init
