export function langSwitch() {
  const dropdowns = Array.from(document.querySelectorAll('.dropdown-language'));

  const updateDropdownLinks = (dropdown, isActive) => {
    dropdown.querySelectorAll('a').forEach((link) => {
      link.setAttribute('tabIndex', isActive ? '0' : '-1');
    });
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      const isActive = dropdown.classList.toggle('active');
      updateDropdownLinks(dropdown, isActive);
    });
  });

  document.addEventListener('click', (event) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
        updateDropdownLinks(dropdown, false);
      }
    });
  });
}
