const init = function () {

    $.ajax({
        type: 'GET',
        url: '/views/sql/countries.php',
        success: function(response){
            //
        }

    });
}

export default init