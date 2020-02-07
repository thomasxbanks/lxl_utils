/**
 * @constant {Function} - Detects whether current device has touch screen
 * @returns {Bool} `true` if a touch device has been detected, otherwise `false
 */
const isTouchDevice = () => {
  const prefixes = ['-webkit-', '-moz-', '-o-', '-ms-'];
  const mq = function (query) {
    return window.matchMedia(query).matches;
  };
  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};

module.exports = isTouchDevice;
