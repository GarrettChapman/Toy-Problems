function wordCount(str) {
  var words = str.split(" ")
  var count = 0;

  for(var i = 0; i< words.length; i++) {
    count++
  }

  return count;

}

wordCount("There are seven words in this sentence")
