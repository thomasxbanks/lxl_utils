/**
 * @constant {Function} - Base64-encodes a given string
 * @param {String} string - The given string
 */
export const encodeString = (string) => btoa(string);

/**
 * @constant {Function} - Decodes a given Base64-encoded string
 * @param {String} string - The given string
 */
export const decodeString = (string) => atob(string);

module.exports = {
  encodeString, decodeString,
};
