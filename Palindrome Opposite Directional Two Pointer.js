//------Two Pointer Moving Inward
const palindromeCheck = (string) => {

	if(string.length <= 1){
		return true;
	}
        // initialize left/right pointers at start and end of string respectively
    let left = 0
	let right = string.length - 1;
    // loop through string characters while comparing them, then move the pointers closer to the center
	while(left < right) {

		if(string[left] === string[right]){
			left++
			right--
		} else{
			return false;
		}
	}
	return true;

} 