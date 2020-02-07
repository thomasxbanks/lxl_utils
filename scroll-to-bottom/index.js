/**
 * @constant {Function} - Scrolls the viewport to the end of the given element
 * @param {Node} element - The given element
 */

const scrollToBottom = (element) => {
  element.current.scrollTop = element.current.scrollHeight;
};

module.exports = scrollToBottom;
