import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
let _ = require('lodash')

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    const rightSections = document.querySelectorAll(".expertise-section-right");
    const leftSections = document.querySelectorAll(".expertise-section-left");
    const trustedPartnershipsHeader = document.querySelector(".trusted-partnerships-header");


    animateExpertiseSection(rightSections, 'right');
    animateExpertiseSection(leftSections, 'left');

    function animateExpertiseSection(sections, side) {
        let start = "top bottom"
        let end = "bottom"
        let fromTargetY = 40
        let toTargetY = -170
        let fromImageY = 70
        let toImageY = -100


        if(side === 'right'){
            start = "top bottom"
            end = "top"
            fromTargetY = 0
            toTargetY = -60
            fromImageY = 70
            toImageY = -140
        }
        let sectionsArray = Array.prototype.slice.call(sections, 0);
        sectionsArray.forEach((target, index, array) => {
            let sectionImage = target.querySelector('.expertise-image');

            if(index !== array.length - 1){
                // Parallax
                gsap.timeline({
                    defaults: {
                        duration: 5,
                        ease: "slow"
                    },
                    scrollTrigger: {
                        trigger: target,
                        scrub: true,
                        start: start,
                        end: end
                    }
                }).fromTo(target, {y: fromTargetY}, {duration: 4, y: toTargetY})
                    .fromTo(sectionImage,{y: fromImageY}, {duration: 5, y: toImageY}, 0)
            }

            // Our expertise to Trusted Partners pinned image
            if(side === 'right' && index === array.length - 1){

                let animationScroll = null;

                function createAnimationTimeline() {
                    animationScroll = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start: "center-=50px center",
                            endTrigger:'.trusted-partnerships-header',
                            end: () => 'center-=50px center',
                            pin: true,
                            scrub: true,
                            pinSpacing: false,
                            invalidateOnRefresh: false,
                        }
                    });
                }

                createAnimationTimeline()

                function handleResize(){

                    animationScroll.scrollTrigger.kill()
                    animationScroll.kill()

                    createAnimationTimeline()
                }

                $(window).resize('resize',_.debounce(() => {
                    handleResize()
                }, 200))

            }
        });
    }

    if(trustedPartnershipsHeader === null) {
        return false;
    }

    //trusted partnership transition
    gsap.timeline({
        scrollTrigger: {
            trigger: ".trusted-partnerships-header",
            start: "top center-=30px",
            end: "bottom top",
            scrub: true,
            onEnter: ()=>{
                $('.trusted-partnerships-header').addClass('in-viewport');
                $('.trusted-partnerships').addClass('background-color');
                $('.our-expertise').removeClass('lines-background').addClass('background-color');
                $('.gradient-container').addClass('opacity');

            },
            onLeaveBack: ()=>{
                $('.our-expertise').addClass('lines-background').removeClass('background-color');
                $('.trusted-partnerships').removeClass('background-color');
                $('.gradient-container').removeClass('opacity');
            },
        }
    });


}

export default init
