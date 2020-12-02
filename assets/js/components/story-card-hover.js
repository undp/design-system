const init = function () {
    const cards = document.querySelectorAll(".story-card .hover-image .background-image");

    if(Foundation.MediaQuery.is('xlarge up')){
        cards.forEach((el) => {
            el.addEventListener("mousemove", (e) => {
                el.style.setProperty('--x', "calc(10% - " + (e.offsetX*0.1) + "px)");
                el.style.setProperty('--y', "calc(50% - " + (e.offsetY*0.1) + "px)");
            });
        })
    }
}

export default init
