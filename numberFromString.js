function getNumberFromString(s) {

return Number(s.match(/\d/g).join(''));
}


getNumberFromString("123") //123
getNumberFromString("this is number 7") // 7



// ALTERNATE

function getNumberFromString(s) {
  x = Number(s.replace(/\D/g, ""));
  return x;
}
