/*
 * Return the remaining elements of an array after chopping off n elements.
 */

function chopElements (arr, n) {
  return arr.splice(n)
}

chopElements(["cars", "bananas", "pizza"], 2) // => ["pizza"]