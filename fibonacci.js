function Fibonnaci(num) {
  var answer = 1;
  var firstNum = 0;
  var secondNum = 1;


  for(var i = 2; i <= num; i++) {
    answer = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = answer;
  }

  return answer;
}

Fibonnaci(20)
