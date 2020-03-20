/**
 * @constant {Function} - Assigns disabled state to a given element
 * @param {Node} element - The given element
 */
const makeElementIsDisabled = (element) => {
  element.setAttribute('disabled', true);
};

module.exports = makeElementIsDisabled;
