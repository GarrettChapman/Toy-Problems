var countSheep = function (num){

  let result = '';

  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...'
  }
   return result
  }



countSheep(1) // "1 sheep...");
countSheep(2) // "1 sheep...2 sheep...");
countSheep(3) // "1 sheep...2 sheep...3 sheep...");
