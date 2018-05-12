findSmallestInt(nums) {
    var x = nums[0];
    for (var i = 1; i < nums.length; i++) {
      if (nums[i] < x) {
      x = nums[i]
      }
    }
    return x;
  }
