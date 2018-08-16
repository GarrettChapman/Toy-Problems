//the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

function feast(beast, dish) {


  var start = beast[0] === dish[0];
  var end = beast[beast.length - 1] === dish[dish.length - 1];

  let result = start && end;
  return result;
}


feast("great blue heron", "garlic naan")// true
feast("chickadee", "chocolate cake")// true
feast("brown bear", "bear claw") // false
