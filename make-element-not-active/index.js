/**
 * @constant {Function} - Recinds active state of a given element
 * @param {Node} element - The given element
 */
const makeElementNotActive = element => {
  element.dataset.active = false
}

module.exports = makeElementNotActive