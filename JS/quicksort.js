//helper function to swap variables
function swap(arr,x,y){
    [arr[x], arr[y]] = [arr[y], arr[x]];
}

//pivot function:returns the fixed pivot point that is chosen
function pivot(arr, left=0, right=arr.length-1){
    let shift=left;
    for(let i=left+1; i<=right; i++){
        if(arr[i]<arr[left]){
            swap(arr,i,++shift);
        }
    }
    swap(arr,left,shift);
    return shift;
}

function quickSort(array, left = 0, right = array.length-1) {
  if (left < right){
    let pivotIndex = pivot(array, left, right);
    
    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex-1);
    quickSort(array, pivotIndex+1, right);
  }
  return array;
}

