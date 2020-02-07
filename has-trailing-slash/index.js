/**
 * @constant {Function} - Detects whether the given string ends in a `/` character
 * @param {String} input - The given string to test
 * @example hasTrailingSlash('http://url.com/posts/') === true
 * @example hasTrailingSlash('http://url.com/posts') === false
 * @returns {Bool} - `true` if trailing slash detected, otherwise `false`
 */

const hasTrailingSlash = (input) => input.charAt(input.length - 1) === '/';

module.exports = hasTrailingSlash;
