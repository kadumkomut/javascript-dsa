function binarySearch(arr,left,right,target){
    if(left>right) return -1;
    let mid = Math.floor((left+right)/2);
    if(arr[mid]===target) return mid;
    if(target<arr[mid]) return binarySearch(arr,left,mid-1,target);
    return binarySearch(arr,mid+1,right,target);
}

let arr = [-1,3,5,6,23,233,3535];
console.log(binarySearch(arr,0,arr.length-1,-4));