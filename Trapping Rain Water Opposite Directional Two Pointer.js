//Trapping Rain Water- Opposite Directional Two Pointer

//Time Complexity: O(N)
//Space Complexity: O(1)

const trappingRainWaterPointers = (array) => {

    let left = 0;
    let right = array.length - 1;
    let maxLeft = 0, maxRight = 0, total = 0;
    while(left < right){
        //if the value at array[left] is less than or equal to that at array[right]....
        if(array[left] <= array[right]){
            //if the value at array[left] is greater than the one stored in maxLeft than maxLeft is now equal to the value at array[left] 
            if(array[left] > maxLeft){
                maxLeft = array[left]
            // if not then we add the difference between maxLeft and array[left] to our total
            } else {
                //add the difference between the max left and the current left value to the total
                total += maxLeft - array[left]
            }
            //finish by moving our left pointer in
            left++;
            //if the value at array[right] is greater than or that at array[left]
        }else {
            //if the value at array[right] is greater than the one stored in maxRight than maxRight is now equal to the value at array[right] 
            if(array[right] > maxRight){
                maxRight = array[right]
            } else {
                //add the difference between the max right and the current right value to the total
                total += maxRight - array[right]
            }
            //finish by moving our right pointer in
            right--;
        }
    }
    return total;
}