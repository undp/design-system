import './undp';

class Select {
  constructor(element) {
    this.$window = $(window);
    this.$currentSelect = $(element);
    this.$selectOptions = this.$currentSelect.find('[data-select-options]');

    this.value = null;
    this.activeClass = 'active';
    this.expandedClass = 'expanded';
    this.optionSelectedId = null;
    this.$buttonTrigger = this.$currentSelect.find('[data-select-open]');
  }

  init() {
    this.bindEvents();
    this.setSelectOptionListener();
  }

  bindEvents() {
    this.$window.click((ev) => this.handleWindowClick(ev));
    this.$currentSelect.click((ev) => this.handleSelectClick(ev));

    this.$selectOptions.on('focus', this.setupFocus.bind(this));
    this.$selectOptions.on('keydown', this.checkKeyPress.bind(this));
    this.$selectOptions.on('blur', this.close.bind(this));
  }

  handleSelectClick(ev) {
    ev.stopImmediatePropagation(); // Only trigger once at a time
    this.$selectOptions.toggleClass(this.activeClass);
    this.$currentSelect.toggleClass(this.expandedClass);

    // Event fired on keyboard
    if (ev.originalEvent.detail === 0) {
      this.$selectOptions[0].focus();
    }
  }

  handleWindowClick(ev) {
    const isActive = this.$currentSelect.find('.active').length > 0;
    const clickedOutside = !this.$currentSelect.is(ev.target)
    && this.$currentSelect.has(ev.target).length === 0;

    if (clickedOutside && isActive) this.close();
  }

  setSelectOptionListener() {
    const $options = this.$currentSelect.find('.option');

    $options.click((ev) => {
      ev.stopImmediatePropagation();
      this.defocusItem(document.getElementById(this.optionSelectedId));
      this.optionSelectedId = ev.currentTarget.id;
      this.value = ev.currentTarget.dataset.value;

      this.close();
      this.changeSelectedOption();
    });
  }


  close() {
    this.$selectOptions.removeClass(this.activeClass);
    this.$currentSelect.removeClass(this.expandedClass);
  }

  setupFocus() {
    if (this.optionSelectedId) {
      return;
    }

    this.focusFirstItem();
  }

  focusFirstItem() {
    const firstItem = this.$selectOptions[0].querySelector('[role="option"]');

    if (firstItem) {
      this.focusItem(firstItem);
    }
  }

  focusItem(element) {
    this.defocusItem(document.getElementById(this.optionSelectedId));

    element.classList.add('focused');

    this.$selectOptions.attr('aria-activedescendant', element.id);
    this.optionSelectedId = element.id;
    this.value = element.dataset.value;

    if (this.$selectOptions[0].scrollHeight > this.$selectOptions[0].clientHeight) {
      const scrollBottom = this.$selectOptions[0].clientHeight + this.$selectOptions[0].scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        this.$selectOptions[0].scrollTop = elementBottom - this.$selectOptions[0].clientHeight;
      } else if (element.offsetTop < this.$selectOptions[0].scrollTop) {
        this.$selectOptions[0].scrollTop = element.offsetTop;
      }
    }

    this.changeSelectedOption();
  }

  defocusItem(element) {
    if (!element) {
      return;
    }
    element.classList.remove('focused');
  }

  checkKeyPress(evt) {
    const key = evt.which || evt.keyCode;
    let nextItem = document.getElementById(this.optionSelectedId);

    switch (key) {
      case window.UNDP.keyCode.UP:
      case window.UNDP.keyCode.DOWN:
        evt.preventDefault();

        if (key === window.UNDP.keyCode.UP) {
          nextItem = nextItem.previousElementSibling;
        } else {
          nextItem = nextItem.nextElementSibling;
        }

        if (nextItem) {
          this.focusItem(nextItem);
        }

        break;
      case window.UNDP.keyCode.SPACE:
      case window.UNDP.keyCode.RETURN:
        evt.preventDefault();
        this.value = nextItem.dataset.value;

        this.close();
        this.changeSelectedOption();
        break;
      default:
        break;
    }
  }
}

export function select() {
  $('.select-box li').on('click', function(){
    $(this).parent().siblings().text($(this).find('span').text());
  });
  const selects = $('[data-select]');
  selects.each((i, select) => {
    const selectInstance = new Select(select);
    selectInstance.init();
  });
}
