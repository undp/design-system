import 'appear/dist/appear'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const init = function () {

    const trackClass = 'scroll-track'
    const visibleClass = 'in-viewport'
    const parallaxContainer = gsap.utils.toArray('.gs--parallax-container')


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
    gsap.timeline({
        scrollTrigger: {
            trigger: '.sgd-animate',
            start: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: false,
            onEnter: ()=>{
                $('.sgd-animate').find('.track').addClass('in-viewport');
            }
        }
    });


    parallaxContainer.forEach(container => {

        const parallaxRows = container.querySelectorAll('.gs--parallax-row')

        const from = {
            xPercent: 75,
            scrollTrigger: {
                scrub: true,
                trigger: container,
                start: "top+=15% center"
            },
        }
        const to = {
            xPercent: 0,
            scrollTrigger: {
                scrub: true,
                trigger: container,
                end: "center center"
            },
        }

        parallaxRows
            .forEach((row, idx) => {
                const odd = (idx + 1) % 2 !== 0
                let rowOrigin = Object.assign({}, from)

                rowOrigin.xPercent *= odd ? -1 : 1 // Odd elements should start from a negative position (left to right)
                gsap.fromTo(row, rowOrigin, to)
            })
    })
}

export default init
