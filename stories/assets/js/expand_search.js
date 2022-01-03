export const expandSearch = () => {
  $(document).on("click", ".icon-search-black", function () {
    $(this).parent(".expand-search").addClass("open");
    $(this).siblings("input").focus();
  });

  $(document).mouseup(function (event) {
    const expandInput = $(".expand-search input");
    if (
      !expandInput.is(event.target) &&
      expandInput.has(event.target).length === 0
    ) {
      if (expandInput.val().length < 1) {
        expandInput.parent().removeClass("open");
      }
    }
  });
};
