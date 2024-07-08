/* checkbox click start */
export function checkbox(ele, submitbtn) {
  jQuery(ele).click(() => {
    const CHECK = jQuery('input:checked').length;
    if (CHECK < 1) {
      jQuery(submitbtn).addClass('disabled');
    } else {
      jQuery(submitbtn).removeClass('disabled');
    }
  });
}
/* checkbox click end */

/* select option filter click start */
export function selectFilter() {
  jQuery('.select-box li span').on('click', function () {
    const $datavalue = jQuery(this).parent().attr('data-value');
    jQuery(this).closest('.download-content').find('.form-check input').prop('checked', false);
    jQuery('.download-footer .button').addClass('disabled');
    if ($datavalue != 'default') {
      jQuery(this).closest('.download-content').find('.download-row').addClass('hide');
      jQuery(this).closest('.download-content').find(`[data-value=${$datavalue}]`).removeClass('hide');
    } else {
      jQuery(this).closest('.download-content').find('.download-row').removeClass('hide');
    }
  });
}
/* select option filter click start */
