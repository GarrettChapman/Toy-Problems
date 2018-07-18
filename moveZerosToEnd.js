//Given an array, move all the zeros to the end of the array

function moveZeros(arr){
  var result = []; // create empty result array
  var zeros = [];  // creat empty zero array
  for(var i = 0; i < arr.length; i++){ // loop through array
    if(arr[i] !== 0){
      result.push(arr[i]); // push all non zeros to result array
    } else {
      zeros.push(arr[i]);// push all zeros to zeros array
    }
  }
  return result.concat(zeros); //combine the two arrays
}
moveZeros(["a",0,0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])
