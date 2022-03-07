//Depth First Search: In Order

const traverseInOrder = (node, list) => {

    //if the node has a left child, travel down
    if(node.left){
        //recursively call this to travel all the way down.
        traverseInOrder(node.left, list);
    }
    //push last node value onto list
    list.push(node.value)

    //if the node has a right child, travel down
    if(node.right){
        //recursively call this to travel all the way down.
        traverseInOrder(node.right, list);
    }
    return list;
}
