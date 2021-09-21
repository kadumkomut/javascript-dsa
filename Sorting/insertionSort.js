let arr = [23,53,9,1,5,2,4,3,7,23];

// [32,6,7,3,2]
//1 [6,32,7,3,2]
//2 [6,7,32,3,2]
//3 [6,7,3,32,2]
//3 [6,3,7,32,2]
//3 [3,6,7,32,2]


const insertionSort = (arr) =>{
    for(let i=1;i<arr.length;i++){
        let key = arr[i];
        for(let j=i-1;j>=0&&key<arr[j];j--){
                arr[j+1] = arr[j];
                arr[j] = key; 
        }
    }
    return arr;
}

console.log(insertionSort(arr));