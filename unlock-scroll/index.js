/**
 * @constant {Function} - Allows the viewport to scroll
 */

const unlockScroll = () => {
  document.documentElement.style.overflow = '';
};

module.exports = unlockScroll;
