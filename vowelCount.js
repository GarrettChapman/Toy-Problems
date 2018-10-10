function vowelsCount (str)
 var vowelsCount = 0;
  for(var i = 0; i < str.length; i ++){
    if(str[i] === "a" || str[i] === "e" ||str[i] === "i" || str[i] === "o" || str[i] === "u"){
      vowelsCount++;
  }
}
return vowelsCount;
}


//Alternate solution
// function vowelCount(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// }

// function vowelCount(str) {
//   return str.match(/[aeiou]/gi).length
// }
