//Breadth First Search

const breadthFirstSearch = () =>{

    //currentNode is equal to the root node of the tree
    let currentNode = this.root;

    //insert numbers into in order of bfs???
    let list = [];

    //queue is used to keep track current tree level in order to access child nodes
    let queue = [];

    //push the currentNode onto our queue
    queue.push(currentNode);

    while(queue.length > 0) {

        // currentNode is equal to the first value in our queue
        currentNode = queue.shift();
        //push the value onto our list
        list.push(currentNode.value)
        //if the currentNode has left child
        //add the left child to the queue
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        //if the currentNode has right child
        //add the right child to the queue
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }

}