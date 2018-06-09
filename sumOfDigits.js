function digital_root(n) {
  var myString = n.toString();
  var myArray = myString.split('');
  while (myString.length > 1) {
    myString = myArray.reduce((a, b) => +a + +b) + '';
    if (myString.length > 1) {
      myArray = myString.split('');
    }
  }
  return +myString;
}

digital_root(15554)
