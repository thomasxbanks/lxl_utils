/**
  * @constant {Function} - Adds the given input to the user's clipboard
  * @param {String} - input - The given input
  * @example
  * button.addEventListener('click', () => {
  *   copyStringToClipBoard('I will be available for the user to paste')
  * })
*/
const copyStringToClipboard = (input) => {
  // Create new element
  const el = document.createElement('textarea');
  // Set value (inputing to be copied)
  el.value = input;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
};

module.exports = copyStringToClipboard;
