/**
 * @constant {Function} - Toggles the active state to a given element
 * @param {Node} element - The given element
 */

const toggleElementActiveState = (element) => {
  element.dataset.active = !(element.dataset.active === 'true');
};

module.exports = toggleElementActiveState;
