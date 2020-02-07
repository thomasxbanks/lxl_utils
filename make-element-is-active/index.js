/**
 * @constant {Function} - Assigns active state to a given element
 * @param {Node} element - The given element
 */
const makeElementIsActive = (element) => {
  element.dataset.active = true;
};

module.exports = makeElementIsActive;
