/*
 * Return an array consisting of the largest number
 * from each provided sub-array.
 */

function largestNumbersOfArrays (arr) {
  const largest = (a, b) => b > a ? b : a
  return arr.map(subArr => subArr.reduce(largest))
}

largestNumbersOfArrays([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]) // => [27, 5, 39, 1001]