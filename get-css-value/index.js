/**
 * @constant {Function} - Finds the value of a given element's given css property
 * @param {Node} - element - DOM Node to get property value from
 * @param {String} - property - Css property to get value from
 * @example getCssValue(element, 'height') = '123.456px'
 * @returns {String} - The value of the given property including units
 */
const getCssValue = (element, property) => window.getComputedStyle(element).getPropertyValue(property);

module.exports = getCssValue