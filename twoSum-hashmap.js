
// twoSum -> Hashmap

//Time Complexity: O(N)
//Space Complexity:O(N) because at most, we create a hashmap entry for every number in our array


const twoSumMap = (nums, target) => {
    const map = {}; //entries will be stored as follows {element needed to reach target when added to loop value : index}
  
    for (let i = 0; i < nums.length; i++) {
  
      //the difference of the target and the current element gives us the other number needed to reach the target
      const difference = target-nums[i];
      //IF the difference is already saved as the key, return the index stored as the value, as well as the current index
      if (difference in map) {
        return [map[numToFind], i];
      }
      //by default we did not find the difference in our map
      //add the current element as the value, and the index as the value
      map[nums[i]] = i;
    }
    //if no solution exists, return null
    return null
  }