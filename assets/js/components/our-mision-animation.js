import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    const section = $(".our-mission");

    gsap.timeline({
        duration: 5,
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top+=120px bottom',
            end: 'bottom center',
        }
    }).from('body', {backgroundColor: '#FFF'}, 0)
        .to('body', {backgroundColor: '#232E3E'})
        .to('body', {backgroundColor: '#FFF', duration: 2}, 3)
}

export default init