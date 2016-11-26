/*
 * Return true if the string in the first element of the array contains all
 * of the letters of the string in the second element of the array.
 */

function mutation ([str, letters]) {
  const hasLetters = (letter) => str.toLowerCase().indexOf(letter) !== -1

  return letters
    .toLowerCase()
    .split('')
    .every(hasLetters)
}

mutation(["hello", "neo"]) // => false
mutation(["Mary", "Army"]) // => true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // => true