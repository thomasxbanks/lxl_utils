/**
  * @constant {Function} - Detects the end of a css animation or transition based on a given element's css
  * @param {Node} - element - The given element
  * @example
  * button.addEventListener('click', e => {
  *   const { target } = e
  *   window.motionEvent = whichMotionEvent(target)
  *   target.addEventListener(window.motionEvent, functionToRunWhenMotionFinished, { once: true })
  *   // Code that triggers the css motion, eg;
  *   target.dataset.active = true
  * })
*/

const whichMotionEvent = element => {
  const el = document.createElement("fakeelement");
  const motions = {
    animations: {
      "animation": "animationend",
      "OAnimation": "oAnimationEnd",
      "MozAnimation": "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    },
    transitions: {
      "transition": "transitionend",
      "OTransition": "oTransitionEnd",
      "MozTransition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  }
  const elementCss = window.getComputedStyle(element, null)
  const hasAnimation = elementCss.getPropertyValue('animation-name') !== 'none' // Does not have default value
  const hasTransition = elementCss.getPropertyValue('transition') !== 'all 0s ease 0s' // Does not have default value
  // @TODO: Handle elements with both animation and transition properties.
  // Current fallback is to prefer 'animations'
  const motion = hasAnimation ? 'animations' : hasTransition ? 'transitions' : null
  for (t in motions[motion]) {
    if (el.style[t] !== undefined) {
      return motions[motion][t];
    }
  }
}

module.exports = whichMotionEvent