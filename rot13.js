/*
 * Returns the string ciphered with ROT13.
 */

function rot13 (str) {
  return str.replace(/([A-M])|([N-Z])/g, (letter, matchFirst) => (
    String.fromCharCode(
      letter.charCodeAt(0) + (matchFirst ? 13 : -13)
    )
  ))
}

rot13('SERR CVMMN') // => 'FREE PIZZA'
rot13('FREE PIZZA') // => 'SERR CVMMN'