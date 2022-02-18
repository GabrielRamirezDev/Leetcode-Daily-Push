//Typed Out Strings: Brute Force Version 2

//Time Complexity: O(a+b)
//Space Complexity: O(a+b)

const processString = (string) => {
    let array = [];
    for(let i = 0; i < string.length; i++){

        if(string[i] !== '#'){
            array.push(string[i]);
        } else{
            array.pop();
        }
    }
    return array.join('');
}

const backspaceCompare = (s, t) => {
    const processedStringA = processString(s);
	const processedStringB = processString(t)

 return processedStringA === processedStringB ? true: false;

};