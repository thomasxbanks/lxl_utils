/**
  * @constant {Function} - Determines whether a "double tap" has been performed
  * @param {Number} - duration - (Optional) Time in milliseconds between clicks/taps. Defaults to 500
  * @returns {Boolean} - `true` if two or more clicks/taps occur within the duration period, otherwise false
*/

const isDoubleTap = (duration = 500) => {
  const now = new Date().getTime();
  const timesince = now - window.mylatesttap;
  const isDoubleTap = ((timesince < duration) && (timesince > 0));
  window.mylatesttap = new Date().getTime();
  return isDoubleTap;
};

module.exports = isDoubleTap;
