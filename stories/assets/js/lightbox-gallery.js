/**
 * lightbox_gallery.js library
 */
export function lightbox_Gallery() {
  var lightboxDescription = GLightbox({
    selector: '.glightbox',
    draggable: true,
    moreLength: 0,
  });

  // caption alignment set according image block
  $(window).load(() => {
    $('.image-section__description').each(function () {
      var gDesHeight = $(this).height();
      var gImgHeight = $(this).siblings('.image').height();
      if (gDesHeight > gImgHeight) {
        $(this).addClass('caption_top');
      }
    });
  });
}
