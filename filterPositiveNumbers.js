function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(digit=>{
    if(typeof digit === "number") {
    return true
    }
   })
  }


  //Alternate Solutions

//   function filter_list(l) {
//   return l.filter(Number.isInteger);
// }


// function filter_list(l) {
//   return l.filter(function(item) {
//     return typeof item === 'number';
//   });
// }
