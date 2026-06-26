/* checkbox click start */
export function checkbox(ele, submitbtn) {
  const inputs = Array.from(document.querySelectorAll(ele));

  const updateSubmitState = () => {
    const checkedCount = document.querySelectorAll('input:checked').length;
    document.querySelectorAll(submitbtn).forEach((buttonElement) => {
      buttonElement.classList.toggle('disabled', checkedCount < 1);
    });
  };

  inputs.forEach((inputElement) => {
    if (inputElement.dataset.downloadModalCheckboxInited === 'true') {
      return;
    }

    inputElement.addEventListener('click', updateSubmitState);
    inputElement.dataset.downloadModalCheckboxInited = 'true';
  });

  updateSubmitState();
}
/* checkbox click end */

/* select option filter click start */
export function selectFilter() {
  const optionLabels = Array.from(document.querySelectorAll('.select-box li span'));

  optionLabels.forEach((labelElement) => {
    if (labelElement.dataset.downloadModalSelectInited === 'true') {
      return;
    }

    labelElement.addEventListener('click', () => {
      const optionElement = labelElement.parentElement;
      const dataValue = optionElement?.getAttribute('data-value');
      const downloadContent = labelElement.closest('.download-content');

      if (!downloadContent) {
        return;
      }

      downloadContent.querySelectorAll('.form-check input').forEach((inputElement) => {
        inputElement.checked = false;
      });

      document.querySelectorAll('.download-footer .button').forEach((buttonElement) => {
        buttonElement.classList.add('disabled');
      });

      const downloadRows = Array.from(downloadContent.querySelectorAll('.download-row'));
      if (dataValue && dataValue !== 'default') {
        downloadRows.forEach((rowElement) => {
          rowElement.classList.add('hide');
        });
        downloadContent
          .querySelectorAll(`[data-value='${dataValue}']`)
          .forEach((rowElement) => rowElement.classList.remove('hide'));
      } else {
        downloadRows.forEach((rowElement) => {
          rowElement.classList.remove('hide');
        });
      }
    });

    labelElement.dataset.downloadModalSelectInited = 'true';
  });
}
/* select option filter click start */
