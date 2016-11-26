/*
 * Remove all elements from the initial array that are of the same
 * value as these arguments.
 */

function chopElements (arr, ...args) {
  return arr.filter((item) => [...args].indexOf(item) === -1)
}

chopElements([1, 2, 3, 1, 2, 3], 2, 3) // => [1, 1]