function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}



isPalindrome("Anne, I vote more cars race Rome to Vienna.");

--------------------------------------------------------------

function reverseIntegers(num) {

return num.toString().split("").reverse().join("")

}

reverseIntegers(1138)
--------------------------------------------------------------

function reverser(str) {

//reverse characters in words
  return str.split("").reverse().join("")


//reverse words themselves
  return str.split(" ").reverse().join(" ")

}

reverser("this string is reversed")

---------------------------------------------------------------

function fizzbuzz(n){

    for(var i = 1; i <= n; i++){
      if(i % 15 === 0){
        console.log('FizzBuzz')
      }
      else if(i % 3 === 0){
        console.log('Fizz')
      }
      else if(i % 5 === 0){
        console.log('Buzz')
      }
      else{
        console.log(i)
      }
    }
  return
}

fizzbuzz(100)
-----------------------------------------------------------
function vowelCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}



function vowelsCount (str)
 var vowelsCount = 0;
  for(var i = 0; i < str.length; i ++){
    if(str[i] === "a" || str[i] === "e" ||str[i] === "i" || str[i] === "o" || str[i] === "u"){
      vowelsCount++;
  }
}
return vowelsCount;
}

vowelCount("how many vowels in this sentence ")

----------------------------------------------------------------

function reverseArr(arr) {

return arr.reverse()

}

reverseArr([1, 2, 3, 4, 5])

----------------------------------------------------------------

function reverseWords(str) {
  let split = str.split(' ');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].split('').reverse().join('');
  }
   return split.join(' ');
}


reverseWords("these words are now reversed")


//----------------------------------------------------------------

function capitalizeFirst(str) {

// str = str.split(" ");

var cap = str.replace(str[0], str[0].toUpperCase());

return cap
}

capitalizeFirst("this first letter should be capitalized")
