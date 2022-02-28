/**
 * lightbox-gallery.js library
 */
export function lightboxGallery() {
  let lightbox = GLightbox({
    selector: '.glightbox',
    draggable: true,
    moreLength: 0,
  });

  const $windowWidth = $(window).width();
  const breakpoint = window.UNDP.breakpoints.MEDIUM || 768;
  if ($windowWidth <= breakpoint) {
    // Close lightbox on clicking outside on Mobile Breakpoint.
    $(document).on('click', (e) => {
      // Check if click triggered on parent selectors.
      const $triggerClasses = $('.ginner-container, .gslide-inner-content, .gslide, .gslider, .gcontainer, .glightbox-container');
      const $triggerActive = $($triggerClasses).filter((_, el) => $(el).is(e.target)).length;
      if ($(e.target).closest('.glightbox-container').length && $triggerActive) {
        // lightbox close() callback.
        lightbox.close();
      }
    });
  }
  // caption alignment set according image block
  const captionalignment = () => {
    $('.image__description').each(function () {
      // caption class add
      var $gDesHeight = $(this).height();
      var $gImgHeight = $(this).siblings('.image').height();
      if ($gDesHeight > $gImgHeight) {
        $(this).addClass('caption_top');
      } else {
        $(this).removeClass('caption_top');
      }
    });

    // frostedbackground class add
    $('.lightbox-gallery-images li').click(() => {
      $('.goverlay, .gloader').remove();
      $('.gcontainer').addClass('frosted-background');
    });
  };

  // function load
  window.onload = function () {
    if (document.readyState == 'complete') {
      captionalignment();
    }
  };
}
