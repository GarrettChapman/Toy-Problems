// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
//
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
//
// ###Arguments (Haskell)
//
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)
//
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
//
//

function titleCase(title, minorWords) {
  let temp = title
  let minor = minorWords

  if(title.length === 0) {
    return temp = ""
  } else {
    temp = title.toLowerCase().split(" ")
  }
  if(!minorWords) {
    minor = [];
  } else if (minorWords) {
    minor = minorWords.toLowerCase().split(" ");
  }

  for(var i = 0; i < temp.length; i++) {
    if(i === 0) {
    temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
    } else if(minor.indexOf(temp[i]) === -1) {
    temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
    }
  }
  return temp.join(" ");
};
