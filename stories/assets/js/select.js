export function select() {
  const selectBoxes = Array.from(document.querySelectorAll('.select-box'));

  selectBoxes.forEach((selectBox) => {
    const triggerButton = selectBox.querySelector('button');
    const optionsList = selectBox.querySelector('ul');
    const options = Array.from(selectBox.querySelectorAll('li'));

    if (!triggerButton || !optionsList) {
      return;
    }

    triggerButton.addEventListener('click', () => {
      selectBox.classList.toggle('expanded');
      optionsList.classList.toggle('active');
    });

    options.forEach((option) => {
      const setSelectedOption = () => {
        const optionText = option.querySelector('span')?.textContent || option.textContent || '';
        triggerButton.textContent = optionText;
        optionsList.classList.remove('active');
        selectBox.classList.remove('expanded');
      };

      option.addEventListener('click', setSelectedOption);
      option.addEventListener('keypress', setSelectedOption);
    });
  });

  document.addEventListener('mouseup', (event) => {
    selectBoxes.forEach((selectBox) => {
      const triggerButton = selectBox.querySelector('button');
      if (triggerButton && !triggerButton.contains(event.target)) {
        selectBox.classList.remove('expanded');
        selectBox.querySelector('ul')?.classList.remove('active');
      }
    });
  });
}
