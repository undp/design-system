const init = function () {
    $(window).scroll(()=>{
        let $heros = $('.hero');

        $heros.each((i, hero) => {
            let $hero = $(hero)
            let $contractTarget = $hero.find('[data-contract-target]')

            $contractTarget = $contractTarget.length ? $contractTarget : $hero

            if ($(window).scrollTop() > 0) {
                $contractTarget.addClass('contract');
            }
            else {
                $contractTarget.removeClass('contract');
            }
        })
    })
}

export default init
