var countCombinations = function(string, key){

  var string = string.split(key)
  var count = 0;

  for(var i = 1; i < string.length; i++) {

    count++

  }
 return count
}


// countCombinations('my name is billy and billy is awesome', 'billy'); // 2
// countCombinations('abcdefghijklmonopolymonorailqrstuv', 'mono'); // 2
// countCombinations('GrEggreGGREGgREG', 'greg'); // 4
// countCombinations('@#$##@@@','@'); // 4
// countCombinations('wow nothing', 'yeah'); // 0
// countCombinations('lololololol', 'lol'); // 3
// countCombinations('93049', '\\d'); // 5
// countCombinations('Five ', '\.'); // 5
