//Container With Most Water - Brute Force

//Time Complexity: O(n^2) --> two for loops
//Space Complexity: O(1) --> only storing static values

const biggestContainerBruteForce = (array) => {

    let max = 0;
        for(let i = 0; i < array.length; i++){
            for(let k = i + 1; k < array.length; k++){
                //find the length of the subarray
                let subArrayLength = k - i;
                //find the smallest wall AKA smallest value from first and last element of the subarray
                let smallestWall = Math.min(array[i], array[k])
                //find the area by multiplying the smallest wall with the length of the subarray
                let area = smallestWall * subArrayLength;

                //compare "max" and the current area to find the larger of the two. set that value to "max"
                max = Math.max(max, area)
            }
        }
    //Will return 0 if array contains less than two elements because of logic in our second loop "k < array.length"
    return max;
}