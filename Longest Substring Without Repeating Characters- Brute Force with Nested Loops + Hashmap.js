
//Longest Substring Without Repeating Characters: Brute Force (Nested Loops + Hashmap)

//Time Complexity: O(n^2)
//Space Complexity: O(n)

const longestUniqueSubstring = (string) => {

    if(string.length <= 1){
        return string.length
    }
    let longest = 0;

    for(let left = 0; left < string.length; left++){
        //with each iteration current length and our substring hashmap are reset
        let seenChars = {}
        let currentLength = 0;
        for(let right = left; right < string.length; right++){
            let currentChar = string[right]
            //if the current character is not already in our hashmap -->
            //add the char as the key and save true as its value to indivate we've seen it in our substring
            //compare the current legth to the max length
            if(!seenChars[currentChar]){
                currentLength++
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else{
                break;
            }
        }
    }
    return longest;
}