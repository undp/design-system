/* checkbox click start */
export function checkbox(ele, submitbtn) {
  $(ele).click(() => {
    const CHECK = $('input:checked').length;
    if (CHECK < 1) {
      $(submitbtn).addClass('disabled');
    } else {
      $(submitbtn).removeClass('disabled');
    }
  });
}
/* checkbox click end */

/* select option filter click start */
export function selectFilter() {
  $('.select-box li span').on('click', function () {
    const $datavalue = $(this).parent().attr('data-value');
    $(this).closest('.download-content').find('.form-check input').prop('checked', false);
    $('.download-footer .button').addClass('disabled');
    if ($datavalue != 'default') {
      $(this).closest('.download-content').find('.download-row').addClass('hide');
      $(this).closest('.download-content').find(`[data-value=${$datavalue}]`).removeClass('hide');
    } else {
      $(this).closest('.download-content').find('.download-row').removeClass('hide');
    }
  });
}
/* select option filter click start */
