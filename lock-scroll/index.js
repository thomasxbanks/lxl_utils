/**
 * @constant {Function} - Prevents the viewport from scrolling
 */

const lockScroll = () => {
  document.documentElement.style.overflow = 'hidden';
};

module.exports = lockScroll;
