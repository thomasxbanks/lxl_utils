/**
 * @constant {Function} - Generates a random number between a given minimum and maximum
 * @param {Number=} min - The lowest number. Defaults to 0
 * @param {Number=} max - The highest number. Defaults to 100
 * @example `randomNumber(1,10) === 7`
 * @returns {Number} - Whole number
 */
const randomNumber = (min = 0, max = 100) => ~~(Math.floor(Math.random() * max) + min);

module.exports = randomNumber;
