/**
 * @constant {Function} - Decodes a given Base64-encoded string
 * @param {String} string - The given string
 */
const decodeString = (string) => atob(string);

module.exports = decodeString;
