function selectionSort(arr) {
  for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[i]) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
