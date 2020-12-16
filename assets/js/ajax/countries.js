const init = function () {

    $.ajax({
        type: 'GET',
        url: '/views/sql/countries.php',
        success: function(response){
            //testing only
            //console.log(response);
        }

    });
}

export default init