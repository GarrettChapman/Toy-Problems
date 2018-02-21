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
  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toString().toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');


if ( reverseStr === lowRegStr) {
  return true

} else {
  return false
}

}



palindrome("Anne, I vote more cars race Rome to Vienna.");
