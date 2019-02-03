//merges two already sorted arrays into one array
function merge(arr1, arr2){
      let i = 0, j = 0, mergedArr = [];
      while (i < arr1.length && j < arr2.length){
            if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
            else mergedArr.push(arr1[i++]);
      }
      while (i < arr1.length){
            mergedArr.push(arr1[i++]);
      }
      while (j < arr2.length){
            mergedArr.push(arr2[j++]);
      }
  return mergedArr;
}

//mergesort function
function mergeSort(array){
    //check array length, if its 1 then its already sorted
    if(array.length==1){
        return array;
    }
    //split the array into two halves
    let m = Math.floor(array.length/2);
    //recursively sort the two new arrays
    let arr1 = mergeSort(array.slice(0,m));
    let arr2 = mergeSort(array.slice(m));
    //merge the sorted arrays back together
    return merge(arr1, arr2);
}