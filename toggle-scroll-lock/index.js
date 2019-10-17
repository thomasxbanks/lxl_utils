/**
 * @constant {Function} - Allows/prevents the viewport scrolling
 */

const toggleScrollLock = () => {
  document.documentElement.style.overflow = (window.getComputedStyle(document.documentElement, null).getPropertyValue('overflow') === 'hidden') ? '' : 'hidden'
}

module.exports = toggleScrollLock