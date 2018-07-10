function getInitials(name) {
  return name.split(" ")
  .map((word) => {
    return word[0];
  })
  .join('');

}

getInitials("John F Kennedy")



// Alternate Solution


// function getInitials(name) {

// let initials = ""
// let waitingForSpace = false;
//
// for (var i =0; i < name.length; i++){
//   if (!waitingForSpace) {
//   waitingForSpace = true;
//   }
//
//   if (name[i] === " ") {
//     waitingForSpace = false;
//     }
//
//   }
//   return initials

// }
