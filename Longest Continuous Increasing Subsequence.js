//Longest Continuous Increasing Subsequence

var findLengthOfLCIS = function(nums) {
    
    let max = 0;
    let left = 0;
    
    //continues to increment our right pointer and increase the window size
    for(let right = 0; right < nums.length; right++){
        //if the element before our right pointer is greater than our right pointer -->
        //that means our subsequence is not increasing
        //we reassign our left pointer to our right pointer location which rets our window
        if( right > 0 && nums[right-1] >= nums[right]){
            left = right;
        }
        //compare the length of our subarray to the current max and re assign max to the winner
        // (right - left) gives us the number of indexes (zero indexed) -->
        // +1 gives us the length
        max = Math.max(max, right - left + 1)
    }
    // return the largest increasing subsequence/subarray
    return max;
};