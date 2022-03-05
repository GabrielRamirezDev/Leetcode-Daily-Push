//Start And End Of Target In A Sorted Array

//Time Complexity: O(logn)
//Space Complexity: O(1)



//our binary search is modified to take in left and right arguments established out side of the function -->
//This is so we can continue to apply it recursively over sub sections of the array.
const binarySearch = (array, left, right, target) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
          
        if (array[mid] === target) {
          return mid;
        } else if (array[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    
      return -1;
}


const findStartEnd = (array, target) => {
    if (array.length < 1) return [-1, -1];

       //we do not define our left and right pointers in the binary search function and instead define them as arguments -->
    //that way we can recursively apply our binary search on each sub sections of the array until we find our solution

    const firstPos = binarySearch(array, 0, array.length - 1, target);
  
    if (firstPos === -1) return [-1, -1];
  
    let endPos = firstPos,
      startPos = firstPos,
      temp1,
      temp2;

    //a -1 value would mean that have already found the left most position of our target -->
    //continue to recursively apply our binary search until then using our temp variable to -->
    //store the last know position of our target.
    while (startPos !== -1) {
      temp1 = startPos;
      startPos = binarySearch(array, 0, startPos - 1, target);
    }
    //startPos is currently -1. Give it the final start position currently stored in our temp veriable
    startPos = temp1;
  
    while (endPos !== -1) {
      temp2 = endPos;
      endPos = binarySearch(array, endPos + 1, array.length - 1, target);
    }
        //endPos is currently -1. Give it the final end position currently stored in our temp veriable

    endPos = temp2;
  
    return [startPos, endPos];
}