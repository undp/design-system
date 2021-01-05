$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

class LazyLoad {
    constructor() {
        this.classLazy = 'lazy';
        this.classLazyGroup = 'lazy-group';
        this.imageObserver;
        this.imageGroupObserver;
        this.lazyloadThrottleTimeout;

        this.$window = $(window);
        this.$document = $(document);
        this.$images = $('.lazy'); // img with data-src or div with background image
        this.$imagesGroup = $('.lazy-group'); //load all child images
        this.$videos = $('video.lazy');
    }

    init() {
        this.listenerDefault();
    }

    listenerDocumentEvent() {
        this.$document.scroll(() => {
            this.loadImagesVideos();
        });
    }

    listenerWindowEvent() {
        this.$window.on('resize orientationchange', () => {
            this.loadImagesVideos();
        });
    }

    listenerDefault() {
        if ("IntersectionObserver" in window) {
            this.intersectionObserver();
        } else {
            this.$images = $("."+this.classLazy);
            this.listenerWindowEvent();
            this.listenerDocumentEvent();
            this.loadImagesVideos(); // Initial load
        }
    }

    loadImagesVideos() {
        if (this.lazyloadThrottleTimeout) {
            clearTimeout(this.lazyloadThrottleTimeout);
        }
        this.lazyloadThrottleTimeout = setTimeout(() => {
            this.loadImage();
            this.loadVideo();
            if (this.$images.length === 0) {
                this.$document.off('scroll', this.loadImagesVideos());
                this.$window.off('resize', this.loadImagesVideos());
                this.$window.off('reorientationChangesize', this.loadImagesVideos());
            }
        }, 20);
    }

    loadImagesByGroup() {
        if (this.lazyloadThrottleTimeout) {
            clearTimeout(this.lazyloadThrottleTimeout);
        }
        this.lazyloadThrottleTimeout = setTimeout(() => {
            this.loadImagesGroup();
            if (this.$imagesGroup.length === 0) {
                this.$document.off('scroll', this.loadImagesByGroup());
                this.$window.off('resize', this.loadImagesByGroup());
                this.$window.off('reorientationChangesize', this.loadImagesByGroup());
            }
        }, 20);
    }


    intersectionObserver() {
        this.imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) =>  {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove(this.classLazy);
                    this.imageObserver.unobserve(image);
                }
            });
        });

        this.imageGroupObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const groupImages = $(entry.target);
                    let images = groupImages.find('.lazy');

                    groupImages.removeClass(this.classLazyGroup);

                    const loadImagesByGroup = () => {
                        images.each((i, image) => {
                            $(image).attr('src', $(image).data('src'));
                            $(image).removeClass(this.classLazy);
                        });
                    };
                    loadImagesByGroup();

                    this.imageGroupObserver.unobserve(entry.target);
                }
            });
        });
        this.$images = $('.lazy');
        this.$images.each((i, image) => {
            this.imageObserver.observe(image);
        });

        this.$imagesGroup.each((i, group) => {
            this.imageGroupObserver.observe(group);
        });
    }


    loadImage() {
        if (this.$images) {
            this.$images.each((i, image) => {
                if ($(image).isInViewport()) {
                    $(image).attr('src', $(image).data('src'));
                    $(image).removeClass(this.classLazy);
                }
            })
        }
    }

    loadImagesGroup() {
        if (this.$imagesGroup) {
            this.$imagesGroup.each((i, group) => {
                const images = $(group).find(this.classLazy);
                $(group).removeClass(this.classLazyGroup);
                images.each((i, image) => {
                    if ($(image).isInViewport()) {
                        $(image).attr('src', $(image).data('src'));
                        $(image).removeClass(this.classLazy);
                    }
                });
            })
        }
    }

    loadVideo() {
        if (this.$videos) {
            this.$videos.each((i, video) => {
                if ($(video).isInViewport()) {
                    $(video).attr('src', $(video).data('src'));
                    $(video).removeClass(this.classLazy);
                }
            })
        }
    }
}

export default LazyLoad;
