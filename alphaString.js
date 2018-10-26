function alphabetic (s){

let arr = s.split('')

    if ( arr.sort().join('') === s) {
            return true
    } else {
        return false
    }
}
alphabetic('asd') // False
 alphabetic('codewars') // False
 alphabetic('door') //True
