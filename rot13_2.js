/*
 * Returns the string ciphered with ROT13.
 */

function rot13 (str) {
  const chars = []

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i)
    const isLetter = /^[a-zA-Z]+$/.test(str[i])
    let shift = 0

    if (isLetter) {
      shift = (charCode - 13 >= 65) ? -13 : 13
    }

    chars.push(String.fromCharCode(charCode + shift))
  }

  return chars.join('')
}

rot13('SERR CVMMN') // => 'FREE PIZZA'
rot13('FREE PIZZA') // => 'SERR CVMMN'