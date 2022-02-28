window.onload = function() {
  const lazyClass = "lazy";
  const lazyImg = "img." + lazyClass;
  const lazyPicture = "picture." + lazyClass;

  if (document.querySelectorAll(lazyImg) !== null && document.querySelectorAll(lazyPicture) !== null) {

    // Incase of img tag.
    let lazyImages = [].slice.call(document.querySelectorAll(lazyImg));

    // Incase of picture tag.
    let lazyPictures = [].slice.call(document.querySelectorAll(lazyPicture));

    // Check to see if browser supports 'IntersectionObserver' property.
    if ("IntersectionObserver" in window) {
      // Set the 'rootMargin' parameter (works as standard CSS margin rule),
      // to increase the effective bounding box that is considered to find the "intersection".
      const config = {
        // If the image gets within 300px of the browser's viewport, start the download:
        rootMargin: "300px 0px"
      };
      // Create the intersection observer by calling its constructor and passing it a
      // callback function to be run whenever a threshold is crossed in one direction or the other:
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            if (!lazyImage.classList.contains("lazyloaded")) {
              // Incase of picture tag we also change the srcset and add lazyloaded class to picture tag.
              if (lazyImage.nodeName === "PICTURE") {
                const picSource = lazyImage.querySelectorAll("source");
                const picImg = lazyImage.querySelector("img");
                picSource.forEach((source) => {
                  source.srcset = source.dataset.srcset;
                });
                picImg.src = picImg.dataset.src;
                picImg.style.opacity = 1;
              } else {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.style.opacity = 1;
              }
              lazyImageObserver.unobserve(lazyImage);
              lazyImage.classList.remove(lazyClass);
              lazyImage.classList.add("lazyloaded");
            }
          }
        });
      },
      config);
      lazyImages.forEach(function (lazyImage) {
        if (!lazyImage.classList.contains("lazyloaded")) {
          // The callback we setup for the observer will be executed now for the first time.
          lazyImageObserver.observe(lazyImage);
          lazyImage.style.cssText = "opacity: 0; transition: opacity 1s ease";
        }
      });
      lazyPictures.forEach(function (lazyPic) {
        if (!lazyPic.classList.contains("lazyloaded")) {
          // The callback we setup for the observer will be executed now for the first time.
          lazyImageObserver.observe(lazyPic);
          lazyPic.querySelector("img").style.cssText =
            "opacity: 0; transition: opacity 1s ease";
        }
      });
    } else {
      // For browsers that don't support IntersectionObserver yet,
      // load all the images now:
      lazyImages.forEach(function (lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove(lazyClass);
        lazyImage.classList.add("nolazy");
      });
      lazyPictures.forEach(function (lazyPic) {
        const picSource = lazyPic.querySelectorAll("source");
        const picImg = lazyPic.querySelector("img");
        picSource.forEach(function (lazySource) {
          lazySource.srcset = picImg.dataset.srcset;
        });
        picImg.src = picImg.dataset.src;
        lazyPic.classList.remove(lazyClass);
        lazyPic.classList.add("nolazy");
      });
    }
  }
}

