import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    const $section = $(".our-mission")
    const $startTrigger = $section.find('.title-container');

    //white to blue
    const whiteToBlue = gsap.fromTo($section,
        { backgroundColor: "#fff" },
        { backgroundColor: "#232E3E" })

    let startWhiteToBlue = "top-=700px top+=105px"
    let endWhiteToBlue = "+=400px"
    let startBlueToWhite = "bottom top+=200px"


    function calculateSizes(){
        if($(window).width() < 1194){
            startWhiteToBlue = "top-=600px top+=70px"
            endWhiteToBlue = "+=400px"
        }

        if($(window).width() < 834){
            startWhiteToBlue = "top-=500px top+=70px"
            endWhiteToBlue = "+=400px"

            startBlueToWhite = "bottom+=200px top+=70px"
        }
    }

    calculateSizes()

    let whiteToBlueScroll = ScrollTrigger.create({
        trigger: $startTrigger,
        start: startWhiteToBlue,
        end: endWhiteToBlue,
        scrub: true,
        animation: whiteToBlue,
        invalidateOnRefresh: false,
        onRefresh: () =>{
            calculateSizes()
        }
    });


    //blue to white
    const blueToWhite= gsap.fromTo($section,
        { backgroundColor: "#232E3E" },
        { backgroundColor: "#fff",
            immediateRender: false })


    let blueToWhiteScroll = ScrollTrigger.create({
        trigger: $startTrigger,
        start: startBlueToWhite,
        end: "+=200px",
        scrub: true,
        animation: blueToWhite,
        invalidateOnRefresh: false,
        onRefresh: () =>{
            calculateSizes()
        }
    });


    //appear expertise section
    let appearScroll = ScrollTrigger.create({
        trigger: $startTrigger,
        start: "bottom top+=105px",
        scrub: true,
        invalidateOnRefresh: false,
        onEnter: () => {
            $('.our-expertise').removeClass('hide-section')
        },
        onLeaveBack: () => {
            $('.our-expertise').addClass('hide-section')
        },
    });

    $(window).resize(()=>{
        calculateSizes()
        whiteToBlueScroll.update()
        blueToWhiteScroll.update()
        appearScroll.update()
    })
}

export default init