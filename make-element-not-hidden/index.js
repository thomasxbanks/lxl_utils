/**
 * @constant {Function} - Recinds hidden state of a given element
 * @param {Node} element - The given element
 */
const makeElementNotHidden = (element) => {
  element.removeAttribute('hidden');
};

module.exports = makeElementNotHidden;
