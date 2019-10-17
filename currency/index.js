/**
 * @constant {Function} - Provides the given number as a currency
 * @param {Number} value - The given number
 * @param {String} unit - The given currency unit. Defaults to £
 * @example currency(1234567.890, '$') = $1,234,567.89
 * @returns {String} - The formatted display value
 */

const currency = (value, unit='£') => {
  value = value.toFixed(2)
  value += '';
  x = value.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return `${ unit }${ (x1 + x2) }`
}

module.exports = currency
