//Split string into groups of 2 characters


function solution(str){
  return str.match(/.{2}/g);
}


solution("split this into 2 charcters")
