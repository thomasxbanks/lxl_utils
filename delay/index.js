/**
 * @constant {Function} - Delays the running of the next function
 * @param {Number} delaySeconds - The number of whole seconds to delay by
 * @example delay(2).then(() => nextFunction())
 * @returns {Promise} - `resolve` after `delaySeconds`
 */
const delay = (delaySeconds) => new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));

module.exports = delay;
