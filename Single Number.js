//Single Number

const singleNumber = function(nums) {
  const number = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (number[num] === undefined) {
      number[num] = true;
    } else {
      delete number[num];
    }
  }

  const output = parseInt(Object.keys(number)[0]);

  return output;
};