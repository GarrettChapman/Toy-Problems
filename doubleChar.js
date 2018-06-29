function doubleChar(str) {

str = str.split("");
for(var i = 0; i < str.length; i++) {
  str[i] = str[i].repeat(2)
  }
  return str.join("")
}

doubleChar("abc") //"aabbcc"
