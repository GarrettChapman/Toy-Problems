//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 function simpleMultiplication(number) {

     if (number % 2) {
    return number * 9
     }
     return number * 8

}

 simpleMultiplication(3)


 // ALTERNATE SOLUTION
 // return number * (number % 2 ? 9 : 8);
