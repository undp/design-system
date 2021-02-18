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

    gsap.timeline({
        scrollTrigger: {
            scrub: false,
            start: 'center center',
            trigger: '.scroll-track-center',
            invalidateOnRefresh: false,
            onEnter: () => $('.scroll-track-center').find('.track').addClass('in-viewport')
        }
    });


    parallaxContainer.forEach(container => {

        container
            .querySelectorAll('.gs--parallax-row')
            .forEach((row, idx) => {
                const odd = (idx + 1) % 2 !== 0
                const tl = gsap.timeline({
                    scrollTrigger: {
                        scrub: true,
                        ease: 'SlowMo',
                        trigger: container,
                        start: "top bottom",
                        end: "bottom top"
                    }
                })
                // Odd elements should start from a negative position (left to right),
                tl.from(row, {xPercent: 70 * (odd ? -1 : 1)})
                // Odd elements should end further in the direction they were initialized,
                tl.to(row, {xPercent: 10 * (odd ? 1 : -1)})
            })

        container
            .querySelectorAll('.gs--parallax-column')
            .forEach((column, idx) => {
                const odd = (idx + 1) % 2 !== 0
                const tl = gsap.timeline({
                    scrollTrigger: {
                        scrub: true,
                        ease: 'SlowMo',
                        trigger: container,
                        start: "top center",
                        end: "bottom+=15% center"
                    }
                })
                // Even elements should start from a negative position (top to bottom)
                tl.from(column, {yPercent: 10 * (odd ? -1 : 1)})
                // Odd elements should end further in the direction they were initialized
                tl.to(column, {yPercent: 10 * (odd ? 1 : -1)})
            })
    })
}

export default init
