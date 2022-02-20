//Longest Substring Without Repeating Characters: Dynamically Resizing Window Slide + Hashmap

//Time Complexity: O(n)
//Space Complexity: O(n)

const longestUniqueSubstring = (string) => {

    //base case: if our string is equal to 1 or less, our result is the length of the string by default.
    if(string.length <= 1) return string.length;

    //key is the character, value is the index
    let seenChars = {};

    let left = 0;
    let longest = 0;

    for(let right = 0; right < string.length; right++){

        // "currentChar" is equal to the element at string[right]
        let currentChar = string[right];
        
        //checks if "currentChar" is already stored in our hashmap
        //will either result in the index of the element, or undefined
        let prevSeenCharStoredIndex = seenChars[currentChar];

        //we only care about the char if it is in the bounds of our current substring (at index position of "left" or greater)
        // if prevSeenChar is not undefined and if it is in the bounds of our current substring(if itis equal to or greater than left) -->
        // than "left" is now equal to "right"
        if(prevSeenCharStoredIndex >= left){
            
            left = prevSeenCharStoredIndex + 1;
        }

        //add the current character and its index to our hashmap
        seenChars[currentChar] = right;

        //Compare the longest to the current substring length
        longest = Math.max(longest, right - left + 1)
    }
    return longest;
}