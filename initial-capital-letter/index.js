/**
 * @constant {Function} - Capitalizes the first letter of a given string
 * @param {String} - input - String value to manipulate
 * @returns {String} - The given string with the inital letter as upper case and all others lower case
 */
const initialCapitalLetter = (input) => input.toString().charAt(0).toUpperCase() + input.toString().substr(1, input.length).toLowerCase();

module.exports = initialCapitalLetter;
