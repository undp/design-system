/* expand animation start custom */
export default function expandToSize(ele) {
  if (typeof ele === 'string') {
    ele = document.querySelector(ele);
  }
  if (ele) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('expand-to-size', entry.isIntersecting);
      });
    }, {
      rootMargin: '-50% 0px 50% 0px',
      threshold: 0.5,
    });
    observer.observe(ele);
  }
}
// for webpack build
export { expandToSize };
/* expand animation end custom */
