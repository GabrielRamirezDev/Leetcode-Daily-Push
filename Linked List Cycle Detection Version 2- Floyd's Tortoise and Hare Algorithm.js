//Floyds tortoise and Hare Algorithm (Two pointers Fast-Slow Same Directional for cycle detection)

//QUESTIONS: What our input does not have a cycle? What if we receive a single node?

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) only one while loop despite nodes possibly being touched multiple times because of the two pointers
//Space Complexity: O(1) because we only use pointers

const findCycle = (head) => {
    //if we receive a null input return null
    if(!head) return null;
    
    let slow = head
    let fast = head;

    while(true) {
        
        //increment both pointers by 1
    slow = slow.next;
    fast = fast.next;
        
    //if either hit null that means we've hit the end of our list and there is no cycle
    if(fast === null || fast.next === null) {
        return null;
    } else {
        //if null isn't hit, increment our fast pointer again
        fast = fast.next;
    }
    //if our slow and fast pointers are equal that means we are caught in a cycle
    if(slow === fast) break;

    }
    let p1 = head;
    let p2 = slow;
    //restart from the head and slow positions with new pointers
    //continue incrementing until our pointers are equal and return either pointer
    while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
    }

    return p2
}