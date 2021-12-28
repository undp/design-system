export const init = () => {
  $(document).on('click', '.expand-search', function () {
    var { length } = $(this).find('input').val();
    $(this).find('input').focus().setSelectionRange(length, length);
  });
};
