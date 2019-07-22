function pairwise(arr, arg) {
  var sum = 0
  for(var i=0; i<arr.length; i++) {
    for(var j=i+1; j<arr.length; j++) {
      if(arr[i] + arr[j] == arg) {
        sum = sum + i + j
        arr.splice(i,1)
        arr.splice(j,1)
      }
    }
  }
  return sum
}

console.log(pairwise([1,4,2,3,0,5], 7))
console.log(pairwise([1, 1, 1], 2))
