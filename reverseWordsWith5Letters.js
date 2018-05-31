function spinWords(text){
    return text.split(' ')
        .map(function (x) {
            if (x.length >= 5) {
                return x.split("").reverse().join("")
            }
            return x
        }).join(' ')
  }



spinWords("Hey fellow warriors")

// "Hey wollef sroirraw"
