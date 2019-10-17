/**
 * @constant {Function} - Finds the first key matching the given value in a given object
 * @param {object} obj - The given object
 * @param {Any} value - The value to search for
 * @returns {String} - The found key
 */
const getKeyByValue = (obj, value) => Object.keys(obj).find(key => obj[key] === value)

module.exports = getKeyByValue