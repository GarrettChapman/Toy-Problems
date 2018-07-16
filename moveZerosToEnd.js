//Given an array, move all the zeros to the end of the array

function moveZeros(arr){

  var result = [];
  var zeros = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      result.push(arr[i]);
    } else {
      zeros.push(arr[i]);
    }
  }
  return result.concat(zeros);
}


moveZeros(["a",0,0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])
