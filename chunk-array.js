/*
 * Write a function that splits an array (first argument) into groups
 * the length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArray (arr, size) {
  let result = []
  let pos = 0
  let total = arr.length

  while (pos < total) {
    result.push(
      arr.slice(pos, pos += size)
    )
  }

  return result
}

chunkArray(["a", "b", "c", "d", "e", "f"], 2) // => [["a", "b"], ["c", "d"], ["e", "f"]]