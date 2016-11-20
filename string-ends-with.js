/*
 * Check if a string ends with the given target string.
 */

function stringEndsWith (str, target) {
  return str.substring(str.length - target.length) === target
}

stringEndsWith('Mark', 'k') // => true
stringEndsWith('You shall not pass', 'pass') // => true
stringEndsWith('I love you', 'love') // => false