/**
 * @constant {Function} - Removes the units from a given string value
 * @param {String} - input - String value to manipulate
 * @example numberizeValue('123.456px') = 123.456
 * @returns {Number} - The given string as a float integer with units removed
 */
const numberizeValue = input => parseFloat(input.slice(0, input.length - input.match(/[a-zA-Z%]/g).length))

module.exports = numberizeValue