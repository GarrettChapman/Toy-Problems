var isAnagram = function(test, original) {

var test = test.toLowerCase().split("").sort().join("");


var original = original.toLowerCase().split("").sort().join("");


if (test === original) {

    return true
  }else{
    return false
  }

};


isAnagram("foefet", "toffee")
