//Get the number length for any number more than 21 characters, less than 21 characters return 'wrong input'



function getNumberLength(n){

  if(n < 21) {
    return n.toString().length;
  }

  else{ return 'wrong input'}
}

getNumberLength(12345987656789876543223333)
