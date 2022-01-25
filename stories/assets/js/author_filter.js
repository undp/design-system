export const authorFilter = () => {
  $('.sort-btn').click(function sortclick(event) {
    event.preventDefault();
    $('.author-filter').addClass('author-filter-show');
    $('.close-btn').addClass('show-close');
    $(this).addClass('hide-sort');
  });
  $('.close-btn').click(function closeclick(event) {
    event.preventDefault();
    $('.author-filter').removeClass('author-filter-show');
    $(this).removeClass('show-close');
    $('.sort-btn').removeClass('hide-sort');
  });
};