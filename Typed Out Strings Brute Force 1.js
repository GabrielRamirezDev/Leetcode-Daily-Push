//Typed Out Strings: Brute Force Version 1

//Time Complexity: O(2a + b). The time complexity of our helper function is O(n), which we then run a total of two times (once for each input). -->
//That gives us a time complexity of O(a + b). From there we loop through the length of one of our inputs to do our comparisons check bringing us to our final complexity.
//Space Complexity: O(a + b). Because we store the processed array from our helper function in variables whose size scales to the size of our input.


const processString = (string) => {
    let array = [];
    for(let i = 0; i < string.length; i++){

        if(string[i] !== '#'){
            array.push(string[i]);
        } else{
            array.pop();
        }
    }
    return array;
}

const backspaceCompare = (s, t) => {
    const processedStringA = processString(s);
	const processedStringB = processString(t)
    
    if(processedStringA.length !== processedStringB.length){
        return false;
    } else{
        for( let i = 0; i < processedStringA.length; i++){
            if(processedStringA[i] !== processedStringB[i]){
                return false;
            }
        }
    }
    return true;
};