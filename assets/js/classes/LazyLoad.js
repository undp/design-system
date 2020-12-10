class LazyLoad {
    constructor() {
        this.classLazy = 'lazy';
        this.imageObserver;
        this.lazyloadThrottleTimeout;

        this.$window = $(window);
        this.$document = $(document);
        this.$images = $('.lazy'); // img with data-src or div with background image
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
            this.$images = $(this.classLazy);
            this.listenerWindowEvent();
            this.listenerDocumentEvent();
        }
    }

    loadImagesVideos() {
        if (this.lazyloadThrottleTimeout) {
            clearTimeout(this.lazyloadThrottleTimeout);
        }
        this.lazyloadThrottleTimeout = setTimeout(() => {
            this.loadImage();
            this.loadVideo();
            if (this.$images.length == 0) {
                this.$document.off('scroll', this.loadImagesVideos());
                this.$window.off('resize', this.loadImagesVideos());
                this.$window.off('reorientationChangesize', this.loadImagesVideos());
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

        this.$images.each((i, image) => {
            this.imageObserver.observe(image);
        });
    }


    loadImage() {
        if (this.$images) {
            this.$images.each((i, image) => {
                if ($(image).height() < this.$window.scrollTop()) {
                    $(image).attr('src', $(image).data('src'));
                    $(image).removeClass(this.classLazy);
                }
            })
        }
    }

    loadVideo() {
        if (this.$videos) {
            this.$videos.each((i, video) => {
                if ($(video).height() < this.$window.scrollTop()) {
                    $(video).attr('src', $(video).data('src'));
                    $(video).removeClass(this.classLazy);
                }
            })
        }
    }
}

export default LazyLoad;