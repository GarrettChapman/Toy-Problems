function XO(str) {
    same = str.toLowerCase()
  var x = 0
  var o = 0
  for (var i=0; i<same.length; i++){
    if(same[i] === 'x'){
      x ++
    } else if(same[i] === 'o'){
      o ++
    }
  }
  return x === o
}




XO('xo');
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
XO("ooom");
