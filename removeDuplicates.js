function removeDuplicateWords (s) {
  //convert str ot array
  let myArray = s.split(' ');
  //new array for uniques
  let uniqueArray = [];
  // use indexOf to check for unique elements e.g. = -1
for (let i=0; i<myArray.length; i++) {
//add current element to uniqueArray if not already in it i.e. first occurence
if (uniqueArray.indexOf(myArray[i]) === -1) {
  uniqueArray.push(myArray[i]);
  }
}
//convert back to a str
newStr = uniqueArray.join(' ');
return newStr;
}


removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
// 'alpha beta gamma delta');
