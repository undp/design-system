import MultiSelect from './multiSelect';

const init = function () {
  const selects = $('[data-multi-select]');
  selects.each((i, select) => {
    const multiSelect = new MultiSelect(select);
    multiSelect.init();
  });
};

export default init;
