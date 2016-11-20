/*
 * A palindrome is a word or sentence that's spelled the same way both
 * forward and backward, ignoring punctuation, case, and spacing.
 *
 * Check if a word is palindrome.
 */

const ignorePuntuaction = (str) => str.replace(/[^a-zA-Z0-9+]/g, '')
const ignoreCase = (str) => str.toLowerCase()
const reverse = (str) => [...str].reverse().join('')

function isPalindrome (str) {
  const word = ignoreCase(ignorePuntuaction(str))
  return reverse(word) === word
}

isPalindrome('2_A3*3#A2') // => true
isPalindrome('never odd or even') // => true
isPalindrome('My age is 0, 0 si ega ym.') // => true
isPalindrome('banana') // => false