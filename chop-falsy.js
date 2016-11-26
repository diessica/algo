/*
 * Remove all falsy values from an array.
 */

function chopFalsy (arr) {
  return arr.filter(item => item)
}

chopFalsy([0, 7, 'cake', '', null, false, 9, NaN, undefined]) // => [7, "ate", 9]