/**
 * generates RFC4122 guid
 * Public Domain/MIT
 * @return {String} - guid
 * @example https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
const generateUUID = () => {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  const h = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const k = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '-', 'x', 'x', 'x', 'x', '-', '4', 'x', 'x', 'x', '-', 'y', 'x', 'x', 'x', '-', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
  let u = ''; let i = 0; let rb = d + Math.random() * 0xffffffff | 0;
  while (i++ < 36) {
    const c = k[i - 1]; const r = rb & 0xf; const v = c === 'x' ? r : (r & 0x3 | 0x8);
    u += (c === '-' || c === '4') ? c : h[v]; rb = i % 8 === 0 ? Math.random() * 0xffffffff | 0 : rb >> 4;
  }
  return u;
}

module.exports = generateUUID