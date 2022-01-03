export const expandSearch=()=>{
  $(document).on("click", '.expand-search', function(){
      var length = $(this).find('input').val().length;
      $(this).find('input').focus().setSelectionRange(length, length);
  });
}
