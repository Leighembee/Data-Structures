// data structure that maps keys to values for efficient lookup time
// use an array of linked lists, and a hash code function

// constructor for hash node
class HashNode {
  constructor(key, value, next) {
    this.key = key
    this.value = value
    this.next = null
  }
}

// initialize hash table and size, and keep track of current number of buckets
class HashTable {
  constructor(size) {
    this.buckets = Array(size)
    this.numBuckets = this.buckets.length
  }

  // hash function, takes in a key and returns a bucket number that will be used as our index for the key
  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    let bucket = total % this.numBuckets
    return bucket
  }

  // when inserting or updating a node, we run the key through the hashing function and check for collisions, if there is a collision we traverse the buckets chain and find the last node and insert at that position
  insert(key, value) {
    let index = this.hash(key)
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value)
    } else if (this.buckets[index].key === key) {
      this.buckets[index].value = value
    } else {

    }
  }
}

let myHT = new HashTable(30)

