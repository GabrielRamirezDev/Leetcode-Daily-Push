//Level Order of Binary Tree

//QUESTIONS: What do we return if the tree is empty/null? 

//TEST CASE CONSIDERATIONS: tre with a single value, null, 

//Time Complexity: O(n) because we touch every node once
//Space Complexity: O(n) because we have a queue and a result array ( O(2n) ) and the biggest possible size of the queue is the bottom AKA largest level which is O(n/2) -->
// this gives us O(2n/2) we drop constants 2 and /2.

const levelOrder = (root) => {

    //if we receive an empty or null input return an empty array
    if (!root) return [];
    
    //initialize our result array and queue
    let queue = [root];
    let result= []
    //while our queue length is greater than 0 (0 is falsy)
    while (queue.length) {
        let qlen = queue.length, row = [];
        for (let i = 0; i < qlen; i++) {
            //"currentNode" is the first node of the queue
            let currentNode = queue.shift()
            //"row" array now contains the value of the first node
            row.push(currentNode.val)
            //if currentNode has left or right values add them to the queue
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        //push the array containing that row onto our results array and repeat the loop with any new nodes in the queue
        result.push(row)            
    }
    //return the resulting array of array as our answer
    return result
}