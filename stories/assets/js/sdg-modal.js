// sdg modal open
export function sdgModal() {
  const windowTop = window.top || window;
  const $modalOpen = $('.sdg-card:not(.sdg-card-link)');

  // Remove hash in url on modal close
  function removeHash() {
    windowTop.history.pushState('', document.title, windowTop.location.pathname + windowTop.location.search);
  }

  // Load modal open with hash
  $(window).on("load", function() {
    var hash = windowTop.location.hash;
    if (hash.length) {
      $(`a[href$='${hash}'].sdg-card:not(.sdg-card-link)`).trigger('click');
    }
  });

  // Modal open on sdgcard click
  $($modalOpen).on('click', function (event) {
    event.preventDefault();
    $('.modal-sdg-content').animate({ scrollTop: 0 }, 'slow');

    // Get href in sdgcard
    var url = $(this).attr('href');
    windowTop.location.hash = url;
    $('.modal-sdg').addClass('sdg-open');
    $('body').addClass('sdgmodal-open');
    $($modalOpen).attr('tabindex', '-1');
  });

  // Modal close someone hits the escape key
  $(document).keydown((event) => {
    if (event.keyCode == 27 && $('.modal-sdg').hasClass('sdg-open')) {
      removeHash();
      $('.modal-sdg').removeClass('sdg-open');
      $('body').removeClass('sdgmodal-open');
    }
  });

  // Modal close on close button
  $('.modal-sdg .close, .modal-sdg .modal-header').on('click', () => {
    $('.modal-sdg').removeClass('sdg-open');
    $('body').removeClass('sdgmodal-open');
    $($modalOpen).removeAttr('tabindex');
    // Call removeHash funtion for remove hash in url on close button
    removeHash();
  });
}
