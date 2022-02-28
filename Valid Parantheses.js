//Valid Parentheses

//QUESTIONS: What do we do return if we get an empty string? Will the string contain only parentheses?

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) push and pop are O(1) operations
//Space Complexity: O(n) stack grows depending on the input



const isValidParentheses = (string) => {
    if(string.length === 0){
        return true;
    }
    
    const stack = [];
    const parens = {
    '(': ')',
    '{': '}',
    '[': ']'
};
    for(let i = 0; i < string.length; i++){

        //if the current element is in our hashmap that means it is a left parentheses. Add it to the stack
        if(parens[string[i]]){
            stack.push(string[i])
        } else{
            // if it is not a left parentheses -->
            //copy the last left parenthese in the stack and use it as the key to get the corosponding matching right parenthese from our hashmap
            const leftBracket = stack.pop();
            const correctBrack = parens[leftBracket]
            //if the current element is NOT equal to the right parenthese in our hash map we are expecting then return false
            if(string[i] !== correctBrack)return false;
        }
    }
    //if our stack has a length greater than zero, that means there are unclosed parenthese left in our stack which should return false;
    return stack.length === 0;
}