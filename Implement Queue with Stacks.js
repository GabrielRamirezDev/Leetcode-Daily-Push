//Implement Queue with Stacks

//QUESTIONS: Do the methods we have to implement need to perform at the same complexity of a real queue?(they operate at o(1) time complexity in the real queue)

//TEST CASE CONSIDERATIONS:

//Time Complexity
//Space Complexity

class queuewithStacks {

    //create a c;ass constuctor with two stacks
    constructor(){
        this.in = [];
        this.out = [];
    }
    //to add to the  back of the queue simply add it to the "in" stack
    //O(1) space and time
    enqueue(value){
        this.in.push(value);
    }

    //O(n)
    //to remove from the front of the queue-->
    dequeue(){
        //if our "out" stack is empty -->
        if(this.out.length === 0){
            //and while "in" has a length that is greater than 0 (zero is falsy) -->
            while(this.in.length){
                //pop the last value out of "in" and push it on to "out" -->
                //that means we get the values in reverse order
                this.out.push(this.in.pop())
            }
        }
        //return the value we just removed
        return this.out.pop();
    }

    //O(n)
    //to return the element at the front of the queue
    //must use this version due to the juggling of elements between stacks if other methods are called first
    peek(){
        //if our "out" stack is empty -->
        if(this.out.length === 0){
            //and while "in" has a length that is greater than 0 (zero is falsy) -->
            while(this.in.length){
                //pop the last value out of "in" and push it on to "out" -->
                //that means we get the values in reverse order
                this.out.push(this.in.pop());
            }
        }
        // -1 because of zero indexing,
        return this.out[this.out.length - 1];
    }

    //O(1)
    empty(){
        return this.in.length === 0 && this.out.length === 0;
    }
}
