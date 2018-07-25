function getDrinkByProfession(param){

param = param.toLowerCase()

  if(param == "jabroni") {
    return "Patron Tequila"
  }
  else if (param == "school counselor") {
    return "Anything with Alcohol"
  }
   else if (param == "programmer") {
    return	"Hipster Craft Beer"
  }
   else if (param == "bike gang member") {
    return	"Moonshine"
  }
    else if (param == "politician") {
    return		"Your tax dollars"
  }
   else if (param == "rapper") {
    return		"Cristal"
  }
   else {
    return	"Beer"
  }

  return
}


//ALTERNATE with Switch Statement

// function getDrinkByProfession(param) {
//   param = param.toLowerCase();
//
//   switch(param) {
//     case "jabroni": return "Patron Tequila";
//     case "school counselor": return "Anything with Alcohol";
//     case "programmer": return "Hipster Craft Beer";
//     case "bike gang member": return "Moonshine";
//     case "politician": return  "Your tax dollars";
//     case "rapper": return "Cristal";
//     default: return "Beer";
//   }
// }
