// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).
//
// Your function takes three arguments:
//
// The height of the column (meters)
// The distance that the snail crawls during the day (meters)
// The distance that the snail slides down during the night (meters)


function snail(column, day, night) {
  let result = 0;
  let i = 0;

  while (result < column) {
    result = result + day;
    if (result < column) {
      result = result - night;
    }
    i++;
  }
  return i;
}
