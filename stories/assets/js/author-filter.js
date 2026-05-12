/* expand author sort start */
export const authorFilter = () => {
  const sortFilters = document.querySelectorAll('.sort-filter');
  const authorFilters = document.querySelectorAll('.author-filter');

  sortFilters.forEach((sortFilter) => {
    sortFilter.addEventListener('click', () => {
      sortFilter.classList.toggle('close');
      authorFilters.forEach((filter) => {
        filter.classList.toggle('author-filter-show');
      });
    });
  });
};
/* expand author sort end */
