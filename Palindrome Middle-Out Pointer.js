//-----Two Pointer Middle-Out

const palindromeCheck = (string) => {

    //set base case: if length is less than or equal to 1 it is a palindrome by default
    if(string.length <= 1){
		return true;
	}
// initialize left/right pointers to point at the middle index of the string.
//indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2);
    let right = left;
    
// if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }

// loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
    }
    
    left--;
    right++;
}

return true;
} 