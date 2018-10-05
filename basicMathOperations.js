function basicOp(operation, value1, value2)
{

  if(operation == "+") {
  return value1 + value2
  }
  if(operation == "-") {
  return value1 - value2
  }
   if(operation == "*") {
  return value1 * value2
  }
   if(operation == "/") {
  return value1 / value2
  }

}


// Alernate Solution
//
// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }
