/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
      this.items = [];
    }
  
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item)
        return this.size()
    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) return null

        return this.items.shift()

    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.isEmpty()) return null

        return this.items[0]
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length == 0
    }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length
    }
}
  
/* EXTRA: Rebuild the above class using a linked list instead of an array. */

/* 
    In order to maintain an O(1) enqueue time complexity like .push with an array
    We add a tail to our linked list so we can go directly to the last node
*/

// let newQueue = new Queue
// let otherQueue = new Queue
// newQueue.enqueue(5)
// newQueue.enqueue(3)
// newQueue.enqueue(7)
// newQueue.dequeue()
// console.log(newQueue.front())
// console.log(newQueue.isEmpty())
// console.log(otherQueue.isEmpty())
// console.log(newQueue.size())

// console.log(newQueue)





    class QueueNode {
        constructor(data) {
            this.data = data;
            this.next = null;
        }   
    }

    class LinkedListQueue {
    constructor() {
        this.top = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return this.top == null ? true : false
    }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) {
        let newNode = new QueueNode(val)
        if (this.isEmpty()) {
            this.top = newNode
            this.tail = newNode
            return this.size++
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }

        return this.size++
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
    
        let removed = this.top.data
        this.top = this.top.next
        this.size--

        return removed
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() {
        if (this.isEmpty()) return null

        return this.top.data
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) {
        if (this.isEmpty) return false

        let runner = this.top
        while (runner) {
            if (runner.data == searchVal) {
                return true
            }
            runner = runner.next
        }
        return false
    }
}

let queue1 = new LinkedListQueue
console.log(queue1.isEmpty())
queue1.enqueue(5)
queue1.enqueue(2)
console.log(queue1.enqueue(9))
console.log(queue1)
console.log(queue1.dequeue())
console.log(queue1.front())
console.log(queue1)
console.log(queue1.contains(2))
console.log(queue1.contains(3))

