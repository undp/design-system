const init = function () {
    let $cards = $('.stat-card');

    $cards.each((key, element)=>{
        let $element = $(element);
        let image = $element.data('image');
        let timer;

        $element.hover((e)=>{
            timer = setTimeout(function() {
                $element.css("background", `url(${image}) center 0 / cover no-repeat`);
            }, 180)
        }, (e)=>{
            clearTimeout(timer);
            $element.css("background", '#232E3E');
        })
    })
}

export default init