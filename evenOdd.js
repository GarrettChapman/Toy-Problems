for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
}


//update

function even_or_odd(number) {
  return number % 2 == 0 ? "Even": "Odd";
}
