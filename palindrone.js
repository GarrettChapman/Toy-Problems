// function palindrome(str) {
//   var cleanStr = str.match(/[a-z0-9]+/gi);
//   var megaStr = cleanStr.join("").toLowerCase();
//
//
// return megaStr
// }
//
//
//
// palindrome("Annie, I vote more cars race Rome-to-Vienna")



function palindrome(str) {
//   var re = /[^A-Za-z0-9]/g;
//   var lowRegStr = str.toString().toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join('');
//
//
// if ( reverseStr === lowRegStr) {
//   return true
//
// } else {
//   return false
// }

//ALTERNATE SOLUTION


  var str2 = str.split("").reverse().join("");

return str === str2;

}



palindrome("Anne, I vote more cars race Rome to Vienna.");




//Alternate SOLUTION


// function isPalindrome(str) {
//   str = str.replace(/\W/g, '').toLowerCase();
//   return (str == str.split('').reverse().join(''));
// }

// isPalindrome("water")
