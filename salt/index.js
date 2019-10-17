/**
 * @constant {Function} - Provides a unique-ish identifier
 * @example salt() = 0egnmh5vo
 * @returns {String} - A 9-character string of random characters
 */
const salt = () => Math.random().toString(36).substr(2, 9);

module.exports = salt