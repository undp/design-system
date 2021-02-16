import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

let _ = require('lodash')

gsap.registerPlugin(ScrollTrigger)


const init = function () {
    let $section = $(".our-mission, .featured-callout")
    let $startTrigger = $section.find('.title-container');

    if(!$section.length) {
        return false;
    }

    let whiteToBlueScroll = null,
        blueToWhiteScroll = null,
        whiteToBlue = null,
        blueToWhite = null,
        appearScroll = null


    function createScrollsWhiteToBlue(){
        let startWhiteToBlue = "top-=20% top+=105px"
        let endWhiteToBlue = "+=400px"

        if (Foundation.MediaQuery.upTo('small')) {
            startWhiteToBlue = "top-=30% top+=70px"
            endWhiteToBlue = "+=100px"
        }
        else if (Foundation.MediaQuery.upTo('medium')) {
            startWhiteToBlue = "top-=22% top+=70px"
            endWhiteToBlue = "+=200px"
        }

        whiteToBlue = gsap.fromTo('main',
            { backgroundColor: "#fff" },
            { backgroundColor: "#232E3E" })

        whiteToBlueScroll = ScrollTrigger.create({
            trigger: $section,
            start: startWhiteToBlue,
            end: endWhiteToBlue,
            scrub: true,
            animation: whiteToBlue,
            invalidateOnRefresh: false
        });
    }

    function createScrollsBlueToWhite(){
        let startBlueToWhite = "bottom top+=200px"

        if (Foundation.MediaQuery.upTo('small')) {
            startBlueToWhite = "bottom+=100px top+=70px"
        }

        blueToWhite = gsap.fromTo('main',
            { backgroundColor: "#232E3E" },
            { backgroundColor: "#fff",
                immediateRender: false })

        blueToWhiteScroll = ScrollTrigger.create({
            trigger: $startTrigger,
            start: startBlueToWhite,
            end: "+=200px",
            scrub: true,
            animation: blueToWhite
        });
    }

    createScrollsWhiteToBlue()
    createScrollsBlueToWhite()

    //appear expertise section
    function createScrollsAppearExpertise(){
        let startExpertise = "bottom-=100px top+=105px"

        if (Foundation.MediaQuery.upTo('small')) {
            startExpertise = "bottom+=300px top+=105px"
        }

        appearScroll = ScrollTrigger.create({
            trigger: $startTrigger,
            start: startExpertise,
            scrub: true,
            onEnter: () => {
                //
            },
            onLeaveBack: () => {
                //
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

        createScrollsWhiteToBlue()
        createScrollsBlueToWhite()
        createScrollsAppearExpertise()
    }, 2000))
}

export default init
