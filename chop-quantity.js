/*
 * Return the remaining elements of an array after chopping off n elements.
 */

function chopQuantity (arr, n) {
  return arr.splice(n)
}

chopQuantity(["cars", "bananas", "pizza"], 2) // => ["pizza"]