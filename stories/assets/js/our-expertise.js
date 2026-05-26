 

//  Our Expertise section
 

export function ourExpertise() {
  // init slider
  let settings = {
    speed: 500,
    a11y: true,
    keyboardControl: true,
    navigation: {
      nextEl: '.our-expertise .next',
      prevEl: '.our-expertise .prev',
    },
    on: {
      slideChange(slider) {
        const tabElements = Array.from(slider.el.querySelectorAll('.swiper-tabs div'));
        const currentSlide = slider.slides[slider.realIndex];
        const category = currentSlide?.getAttribute('data-category');
        const categorySlides = Array.from(slider.el.querySelectorAll(`.swiper-slide[data-category="${category}"]`));

        tabElements.forEach((tabElement) => {
          tabElement.classList.remove('is-active');
        });

        const categoryIndex = Number(category) - 1;
        if (tabElements[categoryIndex]) {
          tabElements[categoryIndex].classList.add('is-active');
        }

        const counterElement = slider.el.querySelector('.swiper-counter');
        if (counterElement && currentSlide) {
          counterElement.textContent = `${categorySlides.indexOf(currentSlide) + 1} / ${categorySlides.length}`;
        }
      },
    },
  };
  const swiper = new Swiper('.our-expertise .swiper', settings);

  // show initial counter
  const firstCategorySlides = swiper.el.querySelectorAll('.swiper-slide[data-category="1"]');
  const counterElement = swiper.el.querySelector('.swiper-counter');
  if (counterElement) {
    counterElement.textContent = `1 / ${firstCategorySlides.length}`;
  }

  // wire onClick event for tab headers
  document.querySelectorAll('.our-expertise .swiper-tabs div').forEach((tabElement) => {
    if (tabElement.dataset.ourExpertiseInited === 'true') {
      return;
    }

    tabElement.addEventListener('click', (event) => {
      const slider = document.querySelector('.our-expertise .swiper')?.swiper;
      const cat = event.currentTarget?.getAttribute('data-category');
      if (!slider || !cat) {
        return;
      }

    slider.slides.some((slide, index) => {
      if (slide.getAttribute('data-category') === cat) {
        slider.slideTo(index);
        return true;
      }
      return false;
    });
    });

    tabElement.dataset.ourExpertiseInited = 'true';
  });
}
