//Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21


function superSize(num){
  if (num < 10) {
    return num;
  } else {
    var r = String(num).split("").sort().reverse().join("");
    return Number(r);
  }
}
superSize(21)
