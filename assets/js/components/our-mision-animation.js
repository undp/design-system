import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
let _ = require('lodash')

gsap.registerPlugin(ScrollTrigger)

const init = function () {
    let $section = $(".our-mission")
    let $startTrigger = $section.find('.title-container');
    let startExpertise = "bottom-=100px top+=105px"

    let startWhiteToBlue = "top-=600px top+=105px"
    let endWhiteToBlue = "+=400px"
    let startBlueToWhite = "bottom top+=200px"
    let whiteToBlueScroll = null,
        blueToWhiteScroll = null,
        whiteToBlue = null,
        blueToWhite = null,
        appearScroll = null


    function calculateSizes() {

        if ($(window).width() > 1194) {
            startWhiteToBlue = "top-=600px top+=105px"
            endWhiteToBlue = "+=400px"
            startBlueToWhite = "bottom top+=200px"

            startExpertise = "bottom-=100px top+=105px"
        }

        if ($(window).width() < 1194) {
            startWhiteToBlue = "top-=500px top+=70px"
            endWhiteToBlue = "+=200px"
        }

        if ($(window).width() < 834) {
            startWhiteToBlue = "top-=230px top+=70px"
            endWhiteToBlue = "+=100px"

            startBlueToWhite = "bottom+=200px top+=70px"

            startExpertise = "bottom+=300px top+=105px"
        }
    }

    calculateSizes()

    function createScrollsWhiteToBlue(){
        whiteToBlue = gsap.fromTo('body',
            { backgroundColor: "#fff" },
            { backgroundColor: "#232E3E" })

        whiteToBlueScroll = ScrollTrigger.create({
            trigger: $startTrigger,
            start: startWhiteToBlue,
            end: endWhiteToBlue,
            scrub: true,
            animation: whiteToBlue,
            invalidateOnRefresh: false
        });
    }

    function createScrollsBlueToWhite(){
        //blue to white
        blueToWhite = gsap.fromTo('body',
            { backgroundColor: "#232E3E" },
            { backgroundColor: "#fff",
                immediateRender: false })

        blueToWhiteScroll = ScrollTrigger.create({
            trigger: $startTrigger,
            start: startBlueToWhite,
            end: "+=200px",
            scrub: true,
            animation: blueToWhite,
            invalidateOnRefresh: false,
        });
    }

    createScrollsWhiteToBlue()
    createScrollsBlueToWhite()
    
    //appear expertise section
    function createScrollsAppearExpertise(){
        appearScroll = ScrollTrigger.create({
            trigger: $startTrigger,
            start: startExpertise,
            scrub: true,
            invalidateOnRefresh: false,
            onEnter: () => {
                $('.our-expertise').removeClass('hide-section')
            },
            onLeaveBack: () => {
                $('.our-expertise').addClass('hide-section')
            },

        });
    }

    createScrollsAppearExpertise()

    //appear lines
    let appearLines = ScrollTrigger.create({
        trigger: $startTrigger,
        start: "bottom top+=70px",
        end: "bottom top+=70px",
        scrub: true,
        invalidateOnRefresh: false,
        onEnter: () => {
            $('.our-expertise').addClass('lines-background')
        },
        onEnterBack: () => {
            $('.our-expertise').removeClass('lines-background')
        },
    });

    $(window).resize('resize',_.debounce(() => {
        whiteToBlue.kill();
        blueToWhite.kill();
        whiteToBlueScroll.kill()
        blueToWhiteScroll.kill()
        appearScroll.kill()

        calculateSizes()
        createScrollsWhiteToBlue()
        createScrollsBlueToWhite()
        createScrollsAppearExpertise()
    }, 200))
}

export default init