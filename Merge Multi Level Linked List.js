//Merge Multi-Level Doubly Linked List (Iterative, can be solved recursively a well with a worse space complexity)

//QUESTIONS: Does every node point to a child list? Do they all point to the same place in the child list(head or null)? Can child lists point to their own child list in turn? -->
//What do we do with child propertie after flattening(set property to null?)?

//TEST CASE CONSIDERATIONS: Multiple levels, multiple child lists from the same level, receiving null as an input, receiving a single node or single level.

//Time Complexity: O(n) at worst a child node will get touched twice (by currentNode and tail) resulting in O(2n) but we drop the constant.
//Space Complexity: O(1) only storing to single pointers


const flattenLinkedLists = (head) => {

    //if we receive a null input, return back that null
    if(!head) return head;

    let currentNode = head;
    //until we reach null of our base level linked list...
    while(currentNode !== null){

        //if the child property of the current node is null move on to the next node
        if(currentNode.child === null){
            currentNode = currentNode.next;
        } else{
            //if it is not null, "tail" is equal to the head of the child list
            let tail = currentNode.child;

            //until we reach the head of the child list...
            while(tail.next !== null){
                //move on to the next node
                tail = tail.next
            }
            //once we reach the end of the child list, the end of the child list should point to the next node in our base level list
            tail.next = currentNode.next;
            if(tail.next !== null){
                //the next node's previous value should be point to the current node in the child list
                tail.next.prev = tail
            }
            //the current node in our base list now points to the head of the child list
            currentNode.next = currentNode.child
            //the NEW next node's previous value will also point back to the current node
            currentNode.next.prev = currentNode
            //now that we have flattened the base and child layers, we can set the child property to null
            currentNode.child = null;
        }
    }
    return head;
}