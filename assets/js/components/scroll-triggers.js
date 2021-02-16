import 'appear/dist/appear'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const init = function () {

    const trackClass = 'scroll-track'
    const visibleClass = 'in-viewport'
    const parallaxContainer = gsap.utils.toArray('.gs--parallax-container')


    appear({
        bounds: 100,
        reappear: true,
        appear: el => $(el).addClass(visibleClass),
        elements: () => document.getElementsByClassName(trackClass)
    })


    //SDG Cards trigger
    gsap.timeline({
        scrollTrigger: {
            scrub: true,
            start: 'bottom bottom',
            trigger: '.sgd-animate',
            invalidateOnRefresh: false,
            onEnter: () => $('.sgd-animate').find('.track').addClass('in-viewport')
        }
    });


    parallaxContainer.forEach(container => {

        container
            .querySelectorAll('.gs--parallax-row')
            .forEach((row, idx) => {
                const odd = (idx + 1) % 2 !== 0
                const from = {
                    xPercent: 70 * (odd ? -1 : 1), // Odd elements should start from a negative position (left to right),
                    scrollTrigger: {
                        scrub: true,
                        ease: 'SlowMo',
                        trigger: container,
                        start: "center center"
                    }
                }
                const to = {
                    xPercent: 10 * (odd ? 1 : -1), // Odd elements should end further in the direction they were initialized,
                    scrollTrigger: {
                        scrub: true,
                        ease: 'SlowMo',
                        trigger: container,
                        end: "bottom top"
                    }
                }

                gsap.fromTo(row, from, to)
            })
    })
}

export default init
