/*
 * Return the sum of the two numbers passed as array
 * and all numbers between them.
 */

function sumRange(arr) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  let sum = 0

  for (let i = min; i <= max; i++) {
    sum += i
  }

  return sum
}

sumRange([5, 10]) // => 45
sumRange([4, 1]) // => 10

