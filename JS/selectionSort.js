function selectionSort(arr) {
  var smallest = 100000000000
  for(var i=0; i<arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return smallest
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
