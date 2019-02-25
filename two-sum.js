// Given an array of numbers, return indices of two numbers that add up to a target number

function twoSum(nums = [], target = 0) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

function twoSumHash(nums = [], target = 0) {
  let numsMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (numsMap.hasOwnProperty(target - nums[i])) {
      return [numsMap[target - nums[1]], i];
    }
    numsMap[nums[i]] = i;
  }
}

const test = twoSum([2, 7, 11, 15], 9);
test;

const test2 = twoSumHash([2, 7, 11, 15], 9);
console.log(test2);
