import Select from './select';

const init = function () {
  const selects = $('[data-select]');
  selects.each((i, select) => {
    const selectInstance = new Select(select);
    selectInstance.init();
  });
};
export default init;
