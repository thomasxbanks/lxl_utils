/**
 * @constant {Function} - Indicates if a given element is visible within the viewport
 * @param {Node} element - The given element
 * @returns {Boolean} - `true` if the element is completely within the viewport, otherwise `false`
 */

const isInViewport = (element) => {
  const bounds = element.getBoundingClientRect();
  return (
    bounds.top >= 0
      && bounds.left >= 0
      && bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && bounds.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

module.exports = isInViewport;
