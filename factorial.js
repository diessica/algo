/*
 * The factorial of a non-negative integer n is the product of all positive
 * integers less than or equal to n.
 *
 * Return the factorial of a nber.
 */

function factorial (n) {
  if (n <= 0) return 1
  return n * factorial(n - 1)
}

factorial(5) // => 120