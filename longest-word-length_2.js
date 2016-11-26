/*
 * Return the length of the longest word in the provided sentence.
 */

function longestWordLength (str) {
  const words = str.split(' ')
  let temp = ''
  let length = temp.length

  words.forEach(function (word) {
    if (word.length > length) {
      length = word.length
    }

    temp = word
  })

  return length
}

longestWordLength('The quick brown fox jumped over the lazy dog') // => 6