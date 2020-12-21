const init = function () {

    $.ajax({
        type: 'GET',
        url: '/views/sql/queries.php',
        data: {
          type: 'countries'
        },
        dataType: 'json',
        success: function(response){
            response.forEach((item) => {console.log(item.id, item.name)});
        }

    });
}

export default init