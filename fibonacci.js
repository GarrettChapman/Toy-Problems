//Create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed...


function iccanobif(num) {
  var newNum = num-1;
  var fibArr = []
  for(var i = 0; i <= newNum; i ++){
    fibArr.push((fibArr[i-1] || 1) + (fibArr[i-2] || 0))
  }
  return fibArr.reverse()
}

iccanobif(3)
