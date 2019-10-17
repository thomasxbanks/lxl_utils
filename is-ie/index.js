/**
 * @constant {Function} - Determines if the current browser is Internet Explorer
 * @example - if (!isIE()) { doGoodBrowserThing() }
 * @returns {Boolean} - `true` if Internet Explorer is detected in any way, otherwise `false`
 */
const isIE = () =>
(!(window.ActiveXObject) && "ActiveXObject" in window) ||
(!!window.MSInputMethodContext && !!document.documentMode) ||
(navigator.appName === 'Microsoft Internet Explorer') ||
((navigator.appName === 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))
? true 
: false

module.exports = isIE