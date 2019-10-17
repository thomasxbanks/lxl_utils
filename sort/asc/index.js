/**
 * @constant {Function} - Sorts the given array into ascending order
 * @param {Array} input - The given array
 * @example sortAsc([1,3,2]) = [1,2,3]
 * @returns {Array} - The sorted array
 */
const sortAsc = input => input.sort((a,b) => a - b)

module.exports = sortAsc