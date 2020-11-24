import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    const section = $(".our-mission");

    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => gsap.to(section, {backgroundColor: '#232E3E', overwrite: 'auto'}),
        onLeaveBack: () => gsap.to(section, {backgroundColor: 'white', overwrite: 'auto'})
    });
}

export default init