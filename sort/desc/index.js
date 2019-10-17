/**
 * @constant {Function} - Sorts the given array into descending order
 * @param {Array} input - The given array
 * @example sortAsc([1,3,2]) = [3,2,1]
 * @returns {Array} - The sorted array
 */
const sortDesc = input => input.sort((a,b) => b - a)

module.exports = sortDesc