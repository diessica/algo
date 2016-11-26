/*
 * Return the lowest index at which a value n should be inserted
 * into an array once it has been sorted.
 *
 * The returned value should be a number.
 */

function predictIndex (arr, n) {
  return arr.concat([n]).sort((a, b) => a > b).indexOf(n)
}

predictIndex([10, 20, 30, 40, 50], 35) // => 3
predictIndex([5, 3, 20, 3], 5) // => 2