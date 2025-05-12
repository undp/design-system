/* expand author sort start */
export const authorFilter = () => {
  jQuery('.sort-filter').on('click', function () {
    jQuery(this).toggleClass('close');
    jQuery('.author-filter').toggleClass('author-filter-show');
  });
};
/* expand author sort end */
