function include(arr, item){

var answer = arr.includes(item)

return answer

}

include([1,2,3,4], 3)// true
include([1,2,4,5], 3)// false
