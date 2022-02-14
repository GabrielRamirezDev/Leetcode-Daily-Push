////Container With Most Water - Opposite directional two pointer

//Cannot use hashmap to improve runtime because we need two pointers to target elements and create our subarray.
//This means simply using a hashmap to cache values has no positive effect on the run time.

// Time Complexity: O(n)
//Space Complexity: O(1)
const biggestContainerTwoPointer = (array) => {

    let start = 0;
    let stop = array.length - 1;
    let max = 0;

    while (start < stop){

        let smallestWall = Math.min(array[start], array[stop])
        let subArrayLength = stop - start;
        let area = smallestWall * subArrayLength;

        max = Math.max(max, area)
        //We know our area is limited by the smallest walla, AKA value, of the subarray
        //Therefore which ever pointer holds the smaller value will be the one that is moved
        if(array[start] <= array[stop]){
            start++
        } else{
            stop --
        }


    }
    return max;
}