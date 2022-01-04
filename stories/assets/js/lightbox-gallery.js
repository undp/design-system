/**
 * lightbox_gallery.js library
 */
export function lightbox_Gallery() {
   var lightboxDescription = GLightbox({
      selector: '.glightbox2',
      draggable: true,
  });

  //caption alignment set according image block
   $(window).load(function(){
         $(".image-section__description").each(function () {
         var gDesHeight =  $(this).height();
         var gImgHeight =  $(this).siblings('.image').height();
         if (gDesHeight > gImgHeight) {
            $(this).addClass("caption_top");
         }
      });
   });
}
