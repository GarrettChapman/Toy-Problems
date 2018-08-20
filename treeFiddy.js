//return strings that include these 3 phrases (tree fiddy, three fifity, $3.50)

function isLockNessMonster(s) {

  var x = s.includes("tree fiddy") || s.includes("three fifity") || s.includes("$3.50")

  return x

}



isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
