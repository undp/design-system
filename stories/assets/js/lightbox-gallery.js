/**
 * lightbox-gallery.js library
 */
export function lightboxGallery() {
  let lightbox = GLightbox({
    selector: '.glightbox',
    draggable: true,
    moreLength: 0,
  });

  const $windowWidth = jQuery(window).width();
  if ($windowWidth <= 768) {
    // Close lightbox on clicking outside on Mobile Breakpoint.
    jQuery(document).on('click', (e) => {
      // Check if click triggered on parent selectors.
      const $triggerClasses = jQuery('.ginner-container, .gslide-inner-content, .gslide, .gslider, .gcontainer, .glightbox-container');
      const $triggerActive = jQuery($triggerClasses).filter((_, el) => jQuery(el).is(e.target)).length;
      if (jQuery(e.target).closest('.glightbox-container').length && $triggerActive) {
        // lightbox close() callback.
        lightbox.close();
      }
    });
  }
  // caption alignment set according image block
  const captionalignment = () => {
    jQuery('.image__description').each(function () {
      // caption class add
      var $gDesHeight = jQuery(this).height();
      var $gImgHeight = jQuery(this).siblings('.image').height();
      if ($gDesHeight > $gImgHeight) {
        jQuery(this).addClass('caption_top');
      } else {
        jQuery(this).removeClass('caption_top');
      }
    });

    // frostedbackground class add
    jQuery('.lightbox-gallery-images li').click(() => {
      jQuery('.goverlay, .gloader').remove();
      jQuery('.gcontainer').addClass('frosted-background');
    });
  };

  // function load
  window.onload = function () {
    if (document.readyState == 'complete') {
      captionalignment();
    }
  };
}
