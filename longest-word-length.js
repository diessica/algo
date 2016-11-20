/*
 * Return the length of the longest word in the provided sentence.
 */

function longestWordLength (str) {
  const largest = (a, b) => b.length > a.length ? b : a
  return str.split(' ').reduce(largest)
}

longestWordLength('The quick brown fox jumped over the lazy dog') // => 6