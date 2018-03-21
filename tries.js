/* a trie is a tree ( that can be searched by prefixes, it is ordered and used to store a dynamic set or associative array where the keys are usually strings.*/
// a trie is commonly used to store the entire english language for quick prefix lookups.


class Node {
  constructor(key) {
    this.key = key // the character in the sequence
    this.parent = null // keep a reference to the parent
    this.children = {} // hash of the children
    this.end = false // check to see if the node is at the end
  }
  getWord() {
    let output = []
    let node = this

    while (node !== null) {
      output.unshift(node.key)
      node = node.parent
    }
    return output.join('')
  }
}

class Trie {
  constructor() {
    this.root = new Node(null)
  }
  // time complexity: O(k), k = word length

  insert(word) {
    let node = this.root // start at root

    for (let i = 0; i < word.length; i++) {
      // for every character in the word, check to see if character node exists in children
      if (!node.children[word[i]]) {
        //if it doesn't we create
        node.children[word[i]] = new Node(word[i])
        //assign parent to the child node
        node.children[word[i]].parent = node
      }
      // proceed to next depth in the trie
      node = node.children[word[i]]
      // check to see if it is the last word, if it is we set the end variable to true
      if (i === word.length - 1) {
        node.end = true
      }
    }
  }

  // check if it contains a whole word
  contains(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      // check if character node exists in children
      if (node.children[word[i]]) {
        // if it exists, proceed to next depth of trie
        node = node.children[word[i]]
      } else {
        // doesn't exist, return false since it is not a valid word
      }
    }
    // finished going through all the words, is it a whole word
    return node.end
  }

  // return every word with given prefix
  // time complexity: O(p + n), p = prefix length, n = number of child paths
  find(prefix) {
    let node = this.root
    let output = []

    for (let i = 0; i < prefix.length; i++) {
      // make sure prefix has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]]
      } else {
        // theres none, return it
        return output
      }
    }
    // use helper function to find all words in node
    findAllWords(node, output)

    return output
  }
}

// helper function to recursively find all words in the given node
function findAllWords(node, arr) {
  if (node.end) {
    arr.unshift(node.getWord())
  }
  for (let child in node.children) {
    findAllWords(node.children[child], arr)
  }
}

let trie = new Trie()

trie.insert('balloon')
trie.insert('apple')
trie.insert('books')
trie.insert('battles')
trie.insert('apes')

console.log(trie.contains('apple'))
console.log(trie.contains('lizards'))

console.log(trie.find('ba'))
console.log(trie.find('ap'))
console.log(trie.find('boo'))
