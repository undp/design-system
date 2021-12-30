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
    $(this).closest('.download-content').find('.checkbox input').prop('checked', false);
    $('.download-footer .button').addClass('disabled');
    if (datavalue != 'default') {
      $(this).closest('.download-content').find('.checkbox-container').addClass('hide');
      $(this).closest('.download-content').find(`[data-lang=${datavalue}]`).removeClass('hide');
    } else {
      $(this).closest('.download-content').find('.checkbox-container').removeClass('hide');
    }
  });
}
/* select option filter click start */
