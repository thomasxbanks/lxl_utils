/**
 * @constant {Function} - Capitalizes the first letter of each word in a given string
 * @param {String} - input - String value to manipulate
 * @returns {String} - The given string with each word's initial letter as upper case and all others as lower case
 */

const titleCase = (input) => input.split(' ').map((word) => word.toString().charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase()).join(' ');

module.exports = titleCase;
