//Trapping Rain Water- Brute Force

//Time Complexity: O(n^2)
//Space Complexity: O(1)

const trappingRainWaterBruteForce = (array) => {

    let totalWater = 0;

    for(let i = 0; i < array.length; i++){
        let leftPointer = i, rightPointer = i;
        let maxLeft = 0, maxRight = 0;
        while(leftPointer >= 0){
            maxLeft = Math.max(maxLeft, array[leftPointer]);
            leftPointer--
        }
        while(rightPointer < array.length){
            maxRight = Math.max(maxRight, array[rightPointer]);
            rightPointer++
        }
        //current water is equal to the difference between the smallest wall and the current element
        let currentWater = Math.min(maxLeft, maxRight) - array[i]
        if(currentWater >= 0){
            totalWater += currentWatter
        }
    }
    return totalWater;
}