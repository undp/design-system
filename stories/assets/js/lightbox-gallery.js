/**
 * lightbox-gallery.js library
 */
export function lightboxGallery() {
  const lightbox = GLightbox({
    selector: '.glightbox',
    draggable: true,
    moreLength: 0,
  });

  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    // Close lightbox on clicking outside on Mobile Breakpoint.
    document.addEventListener('click', (event) => {
      const targetElement = event.target;
      if (!(targetElement instanceof Element)) {
        return;
      }

      // Check if click triggered on parent selectors.
      const triggerSelectors = '.ginner-container, .gslide-inner-content, .gslide, .gslider, .gcontainer, .glightbox-container';
      const triggerActive = targetElement.matches(triggerSelectors);
      if (targetElement.closest('.glightbox-container') && triggerActive) {
        // lightbox close() callback.
        lightbox.close();
      }
    });
  }
  // caption alignment set according image block
  const captionalignment = () => {
    document.querySelectorAll('.image__description').forEach((descriptionElement) => {
      // caption class add
      const descriptionHeight = descriptionElement.offsetHeight;
      const imageElement = descriptionElement.parentElement?.querySelector('.image');
      const imageHeight = imageElement ? imageElement.offsetHeight : 0;
      if (descriptionHeight > imageHeight) {
        descriptionElement.classList.add('caption_top');
      } else {
        descriptionElement.classList.remove('caption_top');
      }
    });

    // frostedbackground class add
    document.querySelectorAll('.lightbox-gallery-images li').forEach((itemElement) => {
      if (itemElement.dataset.lightboxGalleryInited === 'true') {
        return;
      }

      itemElement.addEventListener('click', () => {
        document.querySelectorAll('.goverlay, .gloader').forEach((overlayElement) => {
          overlayElement.remove();
        });
        document.querySelectorAll('.gcontainer').forEach((containerElement) => {
          containerElement.classList.add('frosted-background');
        });
      });

      itemElement.dataset.lightboxGalleryInited = 'true';
    });
  };

  // function load
  window.addEventListener('load', () => {
    if (document.readyState === 'complete') {
      captionalignment();
    }
  });
}
