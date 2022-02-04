export const authorFilter = () => {
  $('.sort-filter').click(function sortclick() {
    $(this).toggleClass('close');
    $('.author-filter').toggleClass('author-filter-show');
  });
};