//Reverse a Linked List
//Time Complexity: O(n)
//Space Complexity: O(1)
const reverseLinkedList = (head) => {

    let prev = null;
    let current = head;

    //while current is truthy
    while(current) {

        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
}