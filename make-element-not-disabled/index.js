/**
 * @constant {Function} - Recinds disabled state of a given element
 * @param {Node} element - The given element
 */
const makeElementNotDisabled = (element) => {
  element.removeAttribute('disabled');
};

module.exports = makeElementNotDisabled;
