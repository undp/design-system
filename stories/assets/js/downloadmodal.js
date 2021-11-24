/* checkbox click start */
export function checkbox(ele, submitbtn) {
  $(ele).click(() => {
    const check = $('input:checked').length;
    if (check < 1) {
      $(submitbtn).addClass('disabled');
    } else {
      $(submitbtn).removeClass('disabled');
    }
  });
}
/* checkbox click end */

/* select option filter click start */
export function selectfilter() {
  $('.select-box .option span').on('click', function () {
    const datavalue = $(this).parent().attr('data-value');
    $(this).parents('.download-content').find('.custom-control-input').prop('checked', false);
    $('.download-footer .button').addClass('disabled');
    if (datavalue != 'default') {
      $(this).parents('.download-content').find('.selectbox-container').addClass('hide');
      $(this).parents('.download-content').find(`[data-lang=${datavalue}]`).removeClass('hide');
    } else {
      $(this).parents('.download-content').find('.selectbox-container').removeClass('hide');
    }
  });
}
/* select option filter click start */
