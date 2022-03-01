//Minimum Brackets To Remove
//QUESTIONS: Can the string input contain spaces? Does the string need to contain parentheses to be valid(if there are no parentheses is it valid)?

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) because split is o(n) because you are generating an array and you are going through every element in the input. you get 0(4n) minus constants.
//Space Complexity: o(n) because if you have an array of all left facing brackets you would add every element to the stack.


const removeMinParentheses = (string) => {

    let splitString = string.split("");
    let stack = [];

    if(string.length === 0){
        return true;
    }

    for(let i = 0; i < splitString.length; i++){

        //if the current element is in our hashmap that means it is a left parentheses. Add it to the stack
        if(splitString[i] === '('){
            stack.push(splitString[i])
        } else if(splitString[i] === ')' && stack.length){
            stack.pop();
        } else if (splitString[i] === ')'){
            splitString[i] = ''
        }
    }
    while(stack.length){
        let index = stack.pop()
        splitString[index] = ''
    }
    return splitString.join('');
}