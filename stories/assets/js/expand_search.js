export const expandSearch = () => {
  $(document).on("click", ".icon-search-black", function () {
    $(this).parent(".expand-search").toggleClass("open");
    $(this).siblings("input").focus();
  });
};
