// max sum subarray of size k.
function problem1(){
    let arr = [4,2,1,7,8,1,2,8,1,0]
    let k = 3;
    let sum = Number.NEGATIVE_INFINITY;
    let current = 0;
    for(let i=0;i<arr.length;i++){
        current+=arr[i];
        if(i>=k-1){
            sum = Math.max(current,sum);
            current-=arr[i-(k-1)];
        }
    }
    console.log(sum);
}
// problem1();

let set = new Set();
Number.POSITIVE_INFINITY
function problem2(){
    
}
problem2();