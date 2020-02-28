/**
 * @constant {Function} - Assigns hidden state to a given element
 * @param {Node} element - The given element
 */
const makeElementIsHidden = (element) => {
  element.setAttribute('hidden', true);
};

module.exports = makeElementIsHidden;
