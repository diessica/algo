/*
 * Return a title-cased sentence version of the provided sentence.
 */

function titleCase (str) {
  return str.split(' ').map(
    word => word[0].toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}

titleCase("I'm a little tea pot") // => I'm A Little Tea Pot
