const removeDuplicates = (nums: number[]): number[] => {
  let uniqueNums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let flag = false;
    for (let j = 0; j < uniqueNums.length; j++) {
      if (nums[i] === uniqueNums[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      uniqueNums.push(nums[i]);
    }
  }
  return uniqueNums;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
