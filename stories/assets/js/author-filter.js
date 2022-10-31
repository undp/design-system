export const authorFilter = () => {
  jQuery('.sort-filter').click(function sortclick() {
    jQuery(this).toggleClass('close');
    jQuery('.author-filter').toggleClass('author-filter-show');
  });
};
