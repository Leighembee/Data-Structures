// bubble sort is not the most efficient, there are many better alternative solutions to handle sorting
 // time complexity: best case:  Ω(n) average case: Θ(n²) worst case O(n²)
 // space complexity: worst case: O(1)


const bubbleSort = array => {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  }
  return array
}
 // while loop runs while swapped is true, at begining of iteration it is set to false, if we detect an element that requires a swap we set swapped to true and continue swapping elements
