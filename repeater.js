function repeater(string, n){

  var string = string.split("  "); //split string

  for (var i = 0; i < string.length; i++) { //loop through string
     string[i] = string[i].repeat(n)        // assign number of times each character is repeated
  }


  return string.join(" ")  //return the joined string
}


// ALTERNATE SOLUTION


function repeater(string, n){
  return string.repeat(n)
}

repeater('a', 5)// 'aaaaa'
repeater('Na', 16) //'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa'
repeater('Wub ', 6)// 'Wub Wub Wub Wub Wub Wub '
