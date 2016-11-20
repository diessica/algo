/*
 * Check if a string ends with the given target string.
 */

function endsWith (str, target) {
  return str.substring(str.length - target.length) === target
}

endsWith('Mark', 'k') // => true
endsWith('You shall not pass', 'pass') // => true
endsWith('I love you', 'love') // => false