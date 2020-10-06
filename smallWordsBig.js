function smallWordHelper(sentence){
  // An array of the words in the sentence
  let words = sentence.split(" ");

  // Loop through every word in and check it's length
  for(let i = 0; i < words.length; i++){
    if(words[i].length <= 3){
      words[i] = words[i].toUpperCase();
    } else {
      words[i] = words[i].replace(/[aeiou]/ig,'');
    }
  }

  return words.join(" ");
}
