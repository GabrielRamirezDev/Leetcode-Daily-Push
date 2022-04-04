//Contains Duplicate

var containsDuplicate = function(nums) {
    const unique = new Set();
    for(let i = 0; i < nums.length; i++){
        if(unique.has(nums[i])){
            return true;
        } else {
            unique.add(nums[i]);
        }
    }
    return false;
};