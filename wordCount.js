function wordCount(str) {
  var words = str.split(" ") // split string on spaces
  var count = 0; // create a counter to keep track of the count

  for(var i = 0; i< words.length; i++) { // loop through the string
    count++ // add to the count for each word
  }

  return count; // return total of count

}

wordCount("There are seven words in this sentence")
