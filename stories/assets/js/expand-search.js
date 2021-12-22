export const init=()=>{
    $(document).on("click", '.expand-search', function(){ 
        var length = $(this).find('input').val().length;
        $(this).find('input').focus();
        $(this).find('input').setSelectionRange(length, length);
    });
}
