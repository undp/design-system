export const expandSearch = () => {
  const expand = $('.expand-search');
  const expandInput = $('.expand-search input');

  expandInput.on("input", function() {
    if($(this).val().length >= 1){
      $(this).parent(expand).find('.close-button').addClass('show');
    }else{
      $(this).parent(expand).find('.close-button').removeClass('show');
      }
  });

  $(document).on('click', '.expand-button', function () {
    if($(this).siblings('input').val().length >= 1){
      $(this).siblings('.close-button').addClass('show');
    }
    $(this).parent(expand).toggleClass('open');
    if($(this).parent(expand).hasClass('open')){ 
      $(this).siblings('input').focus();
    }
    else{
      $(this).siblings(expandInput).focusout();
      $(this).siblings('.close-button').removeClass('show');
    }
  });
  $(document).on('click', '.expand-search .close-button', function () {
    $(this).siblings('input').val('');
    $(this).removeClass('show');
  });
};
