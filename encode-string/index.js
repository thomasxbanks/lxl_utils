/**
 * @constant {Function} - Base64-encodes a given string
 * @param {String} string - The given string
 */
const encodeString = (string) => btoa(string);

module.exports = encodeString;
