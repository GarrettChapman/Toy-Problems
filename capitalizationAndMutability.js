function capitalizeWord(word) {


var cap = word.replace(word[0], word[0].toUpperCase())

return cap

}




capitalizeWord('word') // 'Word'
capitalizeWord('i') // 'I'
calizeWord('glasswear') // 'Glasswear'

//ALTERNATE


function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
