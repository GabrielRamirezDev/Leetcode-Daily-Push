//Depth First Search: Post Order

const traversePostOrder = (node, list) => {

    //if the node has a left child, travel down
    if(node.left){
        //recursively call this to travel all the way down.
        traversePostOrder(node.left, list);
    }

    //if the node has a right child, travel down
    if(node.right){
        //recursively call this to travel all the way down.
        traversePostOrder(node.right, list);
    }
    //push node value onto list
    list.push(node.value)
    return list;
}