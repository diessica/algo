/*
 * Return an array consisting of the largest number
 * from each provided sub-array.
 */

function largestNumbersOfArrays(arr) {
  const largest = (prev, next) => next > prev ? next : prev
  return arr.map(subArray => subArray.reduce(largest))
}

largestNumbersOfArrays([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]) // => [27, 5, 39, 1001]