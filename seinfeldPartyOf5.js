//Remove names that are less than 6 characters long


function lessThanFive(arr) {
  let shortWord = arr.filter(word => word.length > 5)

  return shortWord;
}


lessThanFive(["Jerry", "Elaine", "Kramer", "Newman", "George"])
