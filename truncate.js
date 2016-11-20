/*
 * Truncate a string if it is longer than the given maximum string length.
 *
 * Return the truncated string with a ... ending.
 *
 * Note that inserting the three dots to the end will add to the string length.
 *
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length
 * in determining the truncated string.
 */

function truncate (str, max) {
  const maxLength = max >= 3 ? max - 3 : max

  return (
    str.length > max
      ? str.substr(0, maxLength) + '...'
      : str
  )
}

truncate('A-tisket a-tasket A green and yellow basket', 11) // => A-tisket...