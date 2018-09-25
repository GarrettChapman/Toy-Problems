//Reverse string while removing all non-alphabetical characters

function reverseLetter(str) {

str = str.replace(/[^a-z]/g, '')

return str.split("").reverse().join("")

}
