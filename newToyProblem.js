// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' .

// Example:

// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"
// You can assume that you will only get positive integers as inputs.


function divisors(num){
  var divs = [];
  for(var i=num-1;i>1;i--){
    if(num%i === 0){
      divs.unshift(i);
    }
  }
  if(divs.length < 1){
    return `${num} is prime`
  } else {
    return divs;
  }
}

//divisors(12)
divisors (126)
//divisors(13)
