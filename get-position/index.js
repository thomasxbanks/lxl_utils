/**
 * @constant {Function} - Get the x and y co-ordinates of a given element
 * @param {Node} el - The given element
 * @example - getPosition(element).x
 * @returns {Object} - The x and y co-ordinates
 */
const getPosition = (el) => {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    if (el.tagName == 'BODY') {
      // deal with browser quirks with body/window/document and page scroll
      const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      const yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos,
  };
};

module.exports = getPosition;
