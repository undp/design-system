import lazyLoad from "../components/lazy-load";

const init = function () {
    const expertiseContainer = $('[data-our-expertise-cards]');

    $.ajax({
        type: 'GET',
        url: '/views/sql/queries.php',
        data: {
          type: 'our_expertise'
        },
        dataType: "html",
        success: function(response){
            expertiseContainer.append(response)
            lazyLoad()
        }

    });
}

export default init