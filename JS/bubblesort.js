//helper function to swap elements
function swap(x, y, arr){
    let temp=arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

function bubbleSort(array){
    //iterate over the length of the array
    for(let i=0; i<array.length; i++){
        //iterate over all unbubbled elements
        for(let j=0; j<array.length-1-i; j++){
            //if the lower value is greater, swap
            if(array[j]>array[j+1]){
                swap(j,j+1,array);
            }
        }
    }
    return array;
}