/**
 * @constant {Function} - Converts a given 'pt' value to 'px'
 * @param {Number} - input - The Point Value to convert
 * @param {Number=} - dpi - The Dots-per-inch value to use in the calculation. Defaults to 300dpi
 * @example `${calculatePixelsFromPoints(5).toFixed(2)}px` = 20.83
 * @returns {Number} - The pixel equivalent of the given point value
 */
const calculatePixelsFromPoints = (input, dpi=300) => ((input / 72) * dpi)

module.exports = calculatePixelsFromPoints