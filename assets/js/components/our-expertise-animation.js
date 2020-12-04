import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
let _ = require('lodash')

gsap.registerPlugin(ScrollTrigger)

const init = function () {

    let rightSections = document.querySelectorAll(".expertise-section-right");
    let leftSections = document.querySelectorAll(".expertise-section-left");

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

        sections.forEach((target, index, array) => {
            let sectionImage = target.querySelector('.expertise-image');

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

            // Our expertise to Trusted Partners pinned image
            if(side === 'right' && index === array.length - 1){

                let height = $('.join-us').height();
                let sectionHeight = $(sectionImage).outerHeight();

                if(sectionHeight < height){
                    height = height - (height - sectionHeight)
                    height -= 70;
                }

                function recalculateSizes(){
                    height = $('.join-us').height();
                    sectionHeight = $(sectionImage).outerHeight();

                    if(sectionHeight < height){
                        height = height - (height - sectionHeight)
                        height -= 70;
                    }

                }

                let animationScroll = null;

                function createAnimationTimeline() {
                    animationScroll = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start: "top top+=300px",
                            endTrigger:'.join-us',
                            end: `center top+=${height}px`,
                            pin: true,
                            scrub: true,
                            pinSpacing: false,
                            invalidateOnRefresh: false
                        }
                    });
                }

                createAnimationTimeline()

                function handleResize(){

                    animationScroll.scrollTrigger.kill()
                    animationScroll.kill()

                    recalculateSizes()
                    createAnimationTimeline()
                }

                $(window).resize('resize',_.debounce(() => {
                    handleResize()
                }, 200))

            }
        });
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: ".join-us-header",
            start: "top center-=30px",
            end: "bottom top",
            scrub: true,
            onEnter: ()=>{
                $('.join-us-header').addClass('in-viewport')
            },
        }
    });


}

export default init
