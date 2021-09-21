let arr = [1,5,2,44,3,7,23];

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = minimum(arr,i);
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;

    
}

function minimum(arr,r){
    let min = arr[r];
    let index = r;
    for(let i=r+1;i<arr.length;i++){
        if(arr[i]<min){
            index = i;
            min = arr[i];
        }
    }
    return index;
}

console.log(selectionSort(arr));