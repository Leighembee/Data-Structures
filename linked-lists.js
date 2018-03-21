// linked list - linear collection of data elements, each pointing to the next node by means of a pointer... consisting of a group of nodes which together represent a sequence

// insertion to head or tail is done in constant time ( O(1) )


/* singly linked list */
// node keeps track of the next node in sequence using a pointer that points to another linked list node




/* doubly linked list */
// node will have two pointers, one that points to the next node, and one that points to the previous node

// node constructor
class Node {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

// our LL node starts off with a value and has pointers to the next linked list node as well as the previous
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
// creates a new node at the head of the linked list, check to see if a head currently exists..if it does it will set the new node's next pointer to the current head and the current head's previous pointer to the new node.. if we don't have a head, we will set both the head and tail pointer to the new node
  addToHead(value) {
    let newNode = new Node(value, this.head, null)
    if (this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
  }
// removing working similar to how we shift elements out of an array, removing head and setting next item as the head, runs in constant time because we are just manipulating the pointers
  removeFromHead() {
    if (!this.head) return null
    let value = this.head.value
    this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    return value
  }
// similar to push in an array, add a node to the end of the list
  addToTail() {
    let newNode = new Node(value, null, this.tail)
    if (this.nail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
  }
// similar to pop in an array, remove last node in list
  removeFromTail() {
    if (!this.tail) return null
    let value = this.tail.value
    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.head = null
    return value
  }
  // searching through a linked list is linear time ( O(n) ) because we have to iterate through each node starting from the head
  search(value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode.value
      }
      currentNode = currentNode.next
    }
    return null
  }
}
