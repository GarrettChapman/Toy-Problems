var nums = [1,5,9];


function changeAll(arr, func) {
  for(var i =0; i < arr.length; i++){
    arr[i] = func(arr[i]);
  }
}


changeAll(nums, function(nums) {return nums + 3});
changeAll(nums, function(nums) {return nums * 4});
changeAll(nums, function(nums) {return nums - 1});
