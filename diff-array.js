/*
 * Rreturn the symmetric difference of the two arrays.
 */

function diffArray(arr, arr2) {
  return arr
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr.includes(el)))
}

diffArray([1, 2, 3, 4, 5, 8, 9], [1, 2, 3, 5, 20]) // => [4, 8, 9, 20]