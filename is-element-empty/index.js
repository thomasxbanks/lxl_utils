/**
 * @constant {Function} - Determines if the given element is empty
 * @param {Node} element - The given element
 * @example - isElementEmpty(document.documentElement) === false
 * @returns {Boolean} - True if the given element has no children, otherwise false
 */

const isElementEmpty = (element) => !element.firstChild;

module.exports = isElementEmpty;
