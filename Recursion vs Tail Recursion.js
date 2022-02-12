//------factorial: normal recursion

//Space Complexity: o(n)
const factorial = (x) => {

    if(x <= 1){
        return 1;
    } else {
        //Due to our multiplication, each function call must wait for the next function call in order to resolve.
        return x * factorial(x-1);
    }
}

//------------factorial: tail recursion
//Space Compexity: O(1)
const tailFactorial = (x, totalsoFar = 1) => {

    if (x === 0){
        return totalsoFar;
    } else {
        //All information is given up front. the original function call does not need to wait to resolve
        //A good engine will know to remove the prevous function calls from the call stack reducing the amount of space needed.
        //Certain languages do not support tail recursion. Javascript supports it, but none of the engines that compile it do.
        //If a language does not support tail recursion, the space complexity will default back to O(n).
        //If a problem has a default memory of O(n) tail recursion will not be a benefit.
        return tailFactorial (x - 1, totalsoFar * x)
    }
}