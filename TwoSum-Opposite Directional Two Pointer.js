
//twoSum -> Opposite Directional Two Pointer

//Time Complexity: O(n)
//Space Complexity: O(1)

//THIS METHOD ONLY WORKS IF THE ARRAY GIVEN IS SORTED because our logic is dependant on whether the SUM is less than the target
//
const twoSumImprovedPointer = (nums, target) => {

    let start = 0;
    let end = nums.length -1;
  
    while (start < end) {
  
        let sum = nums[start] + nums[end];
  
        if(sum === target){
            return [start, end];
        } else if( sum < target) {
            start++
        } else {
            end--
        }
    }
    return null;
  }
  
  