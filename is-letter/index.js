/**
  * @constant {Function} - Determines if a given character is a letter
  * @param {String} - input - The given input
  * @example
  * isLetter('A') === true;
  * isLetter('å') === true;
  * isLetter('#') === false;
  * isLetter('7') === false;
  *
  * @returns { Boolean } - Returns `true` if the given input is a letter, otherwise false
  *
  * While this could be achieved using a regex to find [a-zA-Z], for example,
  * it can be beneficial to leverage ECMAScript case transformation (toUpperCase).
  * It will take into account non-ASCII Unicode character classes of some foreign alphabets.
  * NOTE: this solution will work only for most Latin, Greek, Armenian and Cyrillic scripts.
  * It will NOT work for Chinese, Japanese, Arabic, Hebrew and most other scripts.
*/

const isLetter = (input) => input.toLowerCase() != input.toUpperCase();

module.exports = isLetter;
