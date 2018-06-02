function evenOrOdd(num){

  for (var i = 0; i < num.length; i++) {
    if (num % 2) {
      return "odd"
    } else {
      return "even"
    }
  }
}


evenOrOdd([5])
