/**
 * @constant {Function} - Provides the index of the largest number in an array
 * @param {Number} - arr - The given array
 * @example indexOfMax([1,5,2,3]) === 1
 * @returns {Number} - The array index of the largest number
 */

const indexOfMax = (arr) => arr.reduce((m, x, i, a) => (x > a[m] ? i : m), 0);

module.exports = indexOfMax;
