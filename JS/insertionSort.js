function insertionSort(arr) {
  for(let i=1; i<arr.length; i++) {
    let currArr = arr[i]
    for(var j=i-1; j>=0 && arr[j]>currArr; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currArr
  }
  return arr
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

