/**
 * Converts string to RFC 952 Hostname format.
 * @param {string} text - string to slugify
 * @return {string} - string composed of ascii and `-` characters only.
 */
const slugify = (text) => text.toString().toLowerCase().trim()
  .normalize('NFD') // separate accent from letter
  .replace(/[\u0300-\u036f]/g, '') // remove all separated accents
  .replace(/\s+/g, '-') // replace spaces with -
  .replace(/&/g, '-and-') // replace & with 'and'
  .replace(/_/g, '-') // replace '_' with '-'
  .replace(/[^\w\-]+/g, '') // remove all non-word chars
  .replace(/\-\-+/g, '-') // replace multiple '-' with single '-'
;

export default slugify;
