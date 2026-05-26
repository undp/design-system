// Helper: get the next sibling matching a selector
function nextSiblingMatching(el, selector) {
  let sib = el.nextElementSibling;
  while (sib) {
    if (sib.matches(selector)) return sib;
    sib = sib.nextElementSibling;
  }
  return null;
}

// sdg modal open
export function sdgModal() {
  if (document.body.dataset.sdgModalInited) return;
  document.body.dataset.sdgModalInited = 'true';

  // https://www.chromatic.com/docs/faq/storybook-chromatic-canvas-load-failure/
  let windowTop;
  try {
    windowTop = window.top || window;
  } catch (e) {
    windowTop = window;
  }

  const modalOpenEls = () => document.querySelectorAll('.sdg-card:not(.sdg-card-link)');

  // Remove hash in url on modal close
  function removeHash() {
    windowTop.history.pushState('', document.title, windowTop.location.pathname + windowTop.location.search);
  }

  // Modal open on sdgcard click - handler 1
  const handleSdgCardClick1 = function (event) {
    event.preventDefault();
    const content = document.querySelector('.modal-sdg-content');
    if (content) content.scrollTop = 0;

    // Get href in sdgcard
    const url = this.getAttribute('href');
    const currentcolor = this.classList[1];
    const currentgoal = this.querySelector('h4') ? this.querySelector('h4').textContent : '';
    const currentheading = this.querySelector('strong') ? this.querySelector('strong').textContent : '';

    const nextCard = nextSiblingMatching(this, '.sdg-card');
    const nextcolor = nextCard ? nextCard.classList[1] : '';
    const nextgoal = nextCard && nextCard.querySelector('h4') ? nextCard.querySelector('h4').textContent : '';
    const nextheading = nextCard && nextCard.querySelector('strong') ? nextCard.querySelector('strong').textContent : '';
    const nexturl = nextCard ? nextCard.getAttribute('href') : '';

    windowTop.location.hash = url;
    this.classList.add('last-active');
    if (this.parentElement) {
      Array.from(this.parentElement.children).forEach((sib) => {
        if (sib !== this) sib.classList.remove('last-active');
      });
    }

    const modalSdg = document.querySelector('.modal-sdg');
    if (modalSdg) {
      modalSdg.classList.add('sdg-open');
      const sdgContainer = modalSdg.querySelector('.sdg-container');
      if (sdgContainer) sdgContainer.classList.add(currentcolor);
      const h3 = modalSdg.querySelector('.heading h3');
      if (h3) h3.textContent = `Goal ${currentheading}`;
      const h2 = modalSdg.querySelector('.heading h2');
      if (h2) h2.textContent = currentgoal;
      const ndgCard = modalSdg.querySelector('.ndg-container .sdg-card');
      if (ndgCard) {
        ndgCard.setAttribute('href', nexturl);
        ndgCard.classList.add(nextcolor);
      }
      const ndgStrong = modalSdg.querySelector('.ndg-container strong');
      if (ndgStrong) ndgStrong.textContent = nextheading;
      const ndgH4 = modalSdg.querySelector('.ndg-container h4');
      if (ndgH4) ndgH4.textContent = nextgoal;
    }

    document.body.classList.add('sdgmodal-open');
    modalOpenEls().forEach((el) => el.setAttribute('tabindex', '-1'));
  };

  // Modal open on sdgcard click - handler 2 (mirrors original duplicate handler)
  const handleSdgCardClick2 = function (event) {
    event.preventDefault();
    const content = document.querySelector('.modal-sdg-content');
    if (content) content.scrollTop = 0;

    // Get href in sdgcard
    const url = this.getAttribute('href');
    const currentcolor = this.classList[1];
    const currentgoal = this.querySelector('h4') ? this.querySelector('h4').textContent : '';
    const currentheading = this.querySelector('strong') ? this.querySelector('strong').textContent : '';

    const nextCard = nextSiblingMatching(this, '.sdg-card');
    const nextcolor = nextCard ? nextCard.classList[1] : '';
    const nextgoal = nextCard && nextCard.querySelector('h4') ? nextCard.querySelector('h4').textContent : '';
    const nextheading = nextCard && nextCard.querySelector('strong') ? nextCard.querySelector('strong').textContent : '';

    windowTop.location.hash = url;
    this.classList.add('last-active');

    const modalSdg = document.querySelector('.modal-sdg');
    if (modalSdg) {
      modalSdg.classList.add('sdg-open');
      const sdgContainer = modalSdg.querySelector('.sdg-container');
      if (sdgContainer) sdgContainer.classList.add(currentcolor);
      const h3 = modalSdg.querySelector('.heading h3');
      if (h3) h3.textContent = `Goal ${currentheading}`;
      const h2 = modalSdg.querySelector('.heading h2');
      if (h2) h2.textContent = currentgoal;
      const ndgCard = modalSdg.querySelector('.ndg-container .sdg-card');
      if (ndgCard) ndgCard.classList.add(nextcolor);
      const ndgStrong = modalSdg.querySelector('.ndg-container strong');
      if (ndgStrong) ndgStrong.textContent = nextheading;
      const ndgH4 = modalSdg.querySelector('.ndg-container h4');
      if (ndgH4) ndgH4.textContent = nextgoal;
    }

    document.body.classList.add('sdgmodal-open');
    modalOpenEls().forEach((el) => el.setAttribute('tabindex', '-1'));
  };

  modalOpenEls().forEach((el) => {
    el.addEventListener('click', handleSdgCardClick1);
    el.addEventListener('click', handleSdgCardClick2);
  });

  document.addEventListener('click', (event) => {
    const card = event.target.closest('.ndg-container .sdg-card');
    if (!card) return;
    event.preventDefault();
    event.stopPropagation();

    const url = card.getAttribute('href');
    const lastActiveEl = document.querySelector('.last-active');
    const lastactive = lastActiveEl ? nextSiblingMatching(lastActiveEl, '.sdg-card') : null;

    const bottomcolor = lastactive ? lastactive.classList[1] : '';
    const bottomgoal = lastactive && lastactive.querySelector('h4') ? lastactive.querySelector('h4').textContent : '';
    const bottomheading = lastactive && lastactive.querySelector('strong') ? lastactive.querySelector('strong').textContent : '';
    const nextCard2 = lastactive ? nextSiblingMatching(lastactive, '.sdg-card') : null;
    const nextcolor = nextCard2 ? nextCard2.classList[1] : '';
    const nextgoal = nextCard2 && nextCard2.querySelector('h4') ? nextCard2.querySelector('h4').textContent : '';
    const nextheading = nextCard2 && nextCard2.querySelector('strong') ? nextCard2.querySelector('strong').textContent : '';
    const nexturl = nextCard2 ? nextCard2.getAttribute('href') : '';

    document.querySelectorAll('.sdg-container').forEach((el) => el.classList.add(bottomcolor));
    const modalSdg = document.querySelector('.modal-sdg');
    if (modalSdg) {
      const h3 = modalSdg.querySelector('.heading h3');
      if (h3) h3.textContent = `Goal ${bottomheading}`;
      const h2 = modalSdg.querySelector('.heading h2');
      if (h2) h2.textContent = bottomgoal;
      const ndgCard = modalSdg.querySelector('.ndg-container .sdg-card');
      if (ndgCard) {
        ndgCard.setAttribute('href', nexturl);
        ndgCard.classList.add(nextcolor);
      }
      const ndgStrong = modalSdg.querySelector('.ndg-container strong');
      if (ndgStrong) ndgStrong.textContent = nextheading;
      const ndgH4 = modalSdg.querySelector('.ndg-container h4');
      if (ndgH4) ndgH4.textContent = nextgoal;
    }
    if (lastactive) {
      lastactive.classList.add('last-active');
      if (lastactive.parentElement) {
        Array.from(lastactive.parentElement.children).forEach((sib) => {
          if (sib !== lastactive) sib.classList.remove('last-active');
        });
      }
    }
    windowTop.location.hash = url;
  });

  // Modal close someone hits the escape key
  document.addEventListener('keydown', (event) => {
    const modalSdg = document.querySelector('.modal-sdg');
    if (event.keyCode === 27 && modalSdg && modalSdg.classList.contains('sdg-open')) {
      removeHash();
      const sdgContainer = document.querySelector('.sdg-container');
      if (sdgContainer) sdgContainer.setAttribute('class', 'sdg-container');
      const ndgCard = document.querySelector('.ndg-container .sdg-card');
      if (ndgCard) ndgCard.setAttribute('class', 'sdg-card');
      modalSdg.classList.add('animation-out');
      setTimeout(() => {
        modalSdg.classList.remove('sdg-open', 'animation-out');
      }, 200);
      document.body.classList.remove('sdgmodal-open');
      const lastActiveEl = document.querySelector('.last-active');
      if (lastActiveEl) {
        lastActiveEl.focus();
        lastActiveEl.classList.remove('last-active');
      }
      modalOpenEls().forEach((el) => el.setAttribute('tabindex', '0'));
    }
  });

  // Modal close on close button
  document.querySelectorAll('.modal-sdg .close, .modal-sdg .modal-header').forEach((el) => {
    el.addEventListener('click', () => {
      const sdgContainer = document.querySelector('.sdg-container');
      if (sdgContainer) sdgContainer.setAttribute('class', 'sdg-container');
      const ndgCard = document.querySelector('.ndg-container .sdg-card');
      if (ndgCard) ndgCard.setAttribute('class', 'sdg-card');
      const modalSdg = document.querySelector('.modal-sdg');
      if (modalSdg) {
        modalSdg.classList.add('animation-out');
        setTimeout(() => {
          modalSdg.classList.remove('sdg-open', 'animation-out');
        }, 200);
      }
      document.body.classList.remove('sdgmodal-open');
      modalOpenEls().forEach((el) => el.removeAttribute('tabindex'));
      // Call removeHash function for remove hash in url on close button
      removeHash();
    });
  });
}
