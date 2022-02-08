/**
 * lightbox-gallery.js library
 */
export function lightboxGallery() {
  var lightboxDescription = GLightbox({
    selector: '.glightbox',
    draggable: true,
    moreLength: 0,
  });

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
    $('.lightbox-gallery-images li').click(function(){
      $('.goverlay, .gloader').remove();
      $('.gcontainer').addClass('frosted-background');
    })
  }

  //function load
  window.onload = function() {
  if(document.readyState == 'complete') {
      captionalignment();
    }
  };
}
