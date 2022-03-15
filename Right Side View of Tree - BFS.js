// Right Side View of Tree- BFS Version (THIS VERSION IS BETTER IF YOU KNOW YOU ARE GETTING A SKEWED TREE)

//QUESTIONS: What if we get an empty input?

//TEST CASE CONSIDERATIONS: Unobstructed nodes on the left side of the tree (you can see nodes on the left side if they are not blocked by the right side of the tree). -->
//"standing" is the key word in this question.

//Time Complexity O(n) touch every node only once even with an internal loop
//Space Complexity: O(n) because we have a queue and a result array ( O(2n) ) and the biggest possible size of the queue is the bottom AKA largest level which is O(n/2) -->
// this gives us O(2n/2) we drop constants 2 and /2.


const rightSideView = (root) => {

    //initialize a result array
    const result = [];
    //initialize queue for our bfs
    const queue = [];
    
    //if we get a null input return our empty result array
    if (root === null) return result;
    
    //push the root into our queue
    queue.push(root);
    //while our queue is not empty
    while(queue.length !== 0) {
        //size is equal to the length of our queue
        let size = queue.length;
        //for each in the queue
        for (let i = 0; i < size; i++) {
            //"n" is equal to the first element in the queue
            let n = queue.shift();
            //if i is the last element in the queue push the value of "n" into our result array
            //this means only the right most element of each level, AKA the one we can see from the -->
            // right side of each level will be added to our result array
            if (i === size - 1) result.push(n.val);
            //if n.left is not null push it into the queue
            if (n.left !== null) queue.push(n.left);
            //if n.right is not null push it into the queue
            if (n.right !== null) queue.push(n.right);
        }
        //repeat until our queue is empty
    }
    //return our result array
    return result;
}