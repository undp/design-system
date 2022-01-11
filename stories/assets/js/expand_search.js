export const expandSearch = () => {
  $(document).on('click', '.expand-search button', function () {
    $(this).parent('.expand-search').toggleClass('open');
    if($(this).parent().hasClass('open')){ 
      $(this).siblings('input').focus();
    }
    else{
      $(this).siblings('input').focusout();
    }
  });
};
