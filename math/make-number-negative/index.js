/**
 * @constant {Function} - Makes a given number negative
 * @param {Number} input - The given number
 * @example - makeNumberNegative(5) = -5
 * @returns - The negative version of the given number
 */
const makeNumberNegative = (input) => -Math.abs(input);

module.exports = makeNumberNegative;
