/*
 * Repeat the given string n times.
 * Return an empty string if n is not a positive number.
 */

function repeat (str, n) {
  let result = ''

  if (n < 0) return ''
  if (n === 1) return str

  while (result.length < str.length * n) {
    result += str
  }

  return result
}

repeat('abc', 3) // => abcabcabc
