function pairwise(arr, arg) {
  var sum = 0
  var resArr = []
  var idx = []
  for(var i=0; i<arr.length; i++) {
    resArr.push(arr[i])
  }
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<resArr.length; j++) {
      if(i !== j) {
        if(arr[i] + resArr[j] === arg && idx.indexOf(i) === -1 && idx.indexOf(j) === -1){
          sum = sum + i + j
          idx.push(i,j)
        }
      }
    }
  }
  return sum
}

console.log(pairwise([1,4,2,3,0,5], 7))
console.log(pairwise([1, 1, 1], 2))
