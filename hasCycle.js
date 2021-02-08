// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

let hasCycle = (head) => {
    let fast = head;
    let slow = head;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast === slow) {
            return true;
        }
    }
    return false;
}

console.log("Input: head = [3,2,0,-4], pos = 1, expected: true, actual: ",hasCycle([3,2,0,-4], 1));
console.log("Input: head = [1], pos = -1, expected: false, actual: ",hasCycle([1], -1));
