/*
 * Return true if the string in the first element of the array contains
 * all of the letters of the string in the second element of the array.
 */

function hasLetters ([str, letters]) {
  return letters
    .toLowerCase()
    .split('')
    .every((letter) => str.toLowerCase().indexOf(letter) !== -1)
}

hasLetters(["hello", "neo"]) // => false
hasLetters(["Mary", "Army"]) // => true
hasLetters(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // => true