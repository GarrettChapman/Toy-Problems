function accum(str){
  var count = 1;
  var newStr = "";

  for(var i = 0; i < str.length; i++) {

    newStr += str[i].toUpperCase();

    for(var j = 1; j < count; j++) {
      newStr += str[i].toLowerCase();
    }
    
    count++;

    if(i != (str.length - 1)) {
      newStr += '-';
    }
  }

  return newStr;
}

console.log(accum("abcd"));    //==>  "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    //==>  "C-Ww-Aaa-Tttt"
