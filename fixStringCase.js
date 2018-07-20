function solve(s){

let upperCount = 0;
let lowerCount = 0;

for (let i = 0; i < s.length; i++) {
    console.log(s[i])
    let temp = s[i]

    if( temp === temp.toUpperCase()) {
      upperCount +=1
    } else {
      lowerCount +=1
    }
 }
 if (upperCount > lowerCount) {
   return s.toUpperCase()
 } else if ( lowerCount > upperCount){
   return s.toLowerCase()
 } else if( upperCount === lowerCount) {
   return s.toLowerCase()
 }
}

solve("code") //"code"
solve("CODe") //"CODE"
solve("COde") //"code"
solve("Code") //"code"

//ALTERNATE SOLUTION

function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

solve("code") //"code"
solve("CODe") //"CODE"
solve("COde") //"code"
solve("Code") //"code"
