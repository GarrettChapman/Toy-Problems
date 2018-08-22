//reverse words

function reverser(str) {

return str.split(" ").reverse().join(" ")

}

reverser("this string is reversed")


// reverse words and letters


function reverseAll(str) {

  return str.split("").reverse().join("")

}

reverseAll("this string is reversed")



// Reverse without methods

function reverseLongWay(str) {

var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {

        newString += str[i];
    }
    return newString;

}

reverseLongWay("this string is reversed")


//Reverse with recursion

function reverseRecursion (str) {
  if (str === "")
    return "";
  else
    return reverseRecursion(str.substr(1)) + str.charAt(0);
}

reverseRecursion("this string is reversed")
