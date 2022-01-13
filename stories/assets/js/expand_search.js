export const expandSearch = () => {
  const expand = $('.expand-search');
  const expandInput = $('.expand-search input');

  expandInput.on("input", function() {
    if($(this).val().length >= 1){
      $(this).parent(expand).find('.close').addClass('show');
    }else{
      $(this).parent(expand).find('.close').removeClass('show');
      }
  });

  $(document).on('click', '.expand-btn', function () {
    $(this).parent(expand).toggleClass('open');
    if($(this).parent(expand).hasClass('open')){ 
      $(this).siblings('input').focus();
    }
    else{
      $(this).siblings(expandInput).focusout();
    }
  });
  $(document).on('click', '.expand-search .close', function () {
    $(this).siblings('input').val('');
    $(this).removeClass('show');
  });
};
