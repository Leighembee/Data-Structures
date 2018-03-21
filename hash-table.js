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
      let currentNode = this.buckets[index]
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value
          return
        }
        currentNode = currentNode.next
      }
      currentNode.next = new HashNode(key, value)
    }
  }

  // search through our hash table and look up nodes using a key that we will pass in as an argument, run our key through the hash function to obtain the index, than we can run a lookup in constant time
  get(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) return null
    let currentNode = this.buckets[index]
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }

  // removing a node, using same logic as above, but once the key is found delete it rather than return it
  remove(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) return null
    let currentNode = this.buckets[index]
    while (currentNode) {
      if (currentNode.key === key) delete currentNode.value
      currentNode = currentNode.next
    }
    return null
  }


  // retrieving every node from our hash table. traversing is a weak point of hash tables as the runtime is O(n2)
  retrieveAll() {
    let allNodes = []
    for (let i = 0; i < this.numBuckets; i++) {
      let currentNode = this.buckets[i]
      while (currentNode) {
        allNodes.push(currentNode)
        currentNode = currentNode.next
      }
    }
    return allNodes
  }
}

let myHT = new HashTable(30)
