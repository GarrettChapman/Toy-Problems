function contamination(text, char){

return text.replace(/./g, char);

}



contamination("abc", "z") // "zzz"
contamination("abc", " ") // "   "
contamination("_3ebzgh4","&") // "&&&&&&&&"


// ALTERNATE

function contamination(text, char){
  return char.repeat(text.length)
}

contamination("abc", "z") // "zzz"
contamination("abc", " ") // "   "
contamination("_3ebzgh4","&") // "&&&&&&&&"
