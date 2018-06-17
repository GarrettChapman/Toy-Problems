// Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

// eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){

return password.replace(/a/g, "@").replace(/S/g, "$").replace(/s/g, "$").replace(/o/g, "0").replace(/h/g, "5").replace(/H/g, "5").replace(/x/g, '*');
}
