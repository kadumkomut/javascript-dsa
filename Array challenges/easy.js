// problem 1 - MAX TILL i
// Given an array a[] of size n. For every i from 0 to n-1,
// output max(a[0],a[1],.....a[i])
// input - [1,0,5,4,6,8]
// output- [1,1,5,5,6,8] max till i

// let arr = [1,0,5,4,6,8];
// let max = arr[0];
// for(let i=0;i<arr.length;i++){
//     max = Math.max(max,arr[i]);
//     arr[i] = max;
// }
// console.log(arr)

// --------------------------------------------------------->

// Subarray
// continuous part of an array
// [1,0,2,3,5,4] => [0,2,3]

// problem 2 - SUM OF ALL SUBARRAYS
// Given an array a[] of size n. 
// Output sum of each subarray of the given array

// let arr = [2,5,6,10,2];
// let str = [];
// for(let i=0;i<arr.length;i++){
//     let sum = 0;
//     for(let j=i;j<arr.length;j++){
//         sum+=arr[j];
//     }
//     str.push(sum);
// }
// console.log(str);
// [ 25, 23, 18, 12, 2 ] - output
// --------------------------------------------------------->

// problem 3 - LONGEST ARITHEMATIC SUBARRAY
// An arithematic array is an array that contains at least two integers and the differences between consecutive integers are equal. 
// For example [9,10],[3,3,3] and [9,7,5,3] are arithmetic arrays,
// while [1,3,3,7], [2,1,2] and [1,2,4] are not arithmetic arrays.

// --------------------------------------------------------------------------------
// Given an array of elements, determine if there is an element in the array such that the sum of all the elements to its left is equal to the sum of all elements to its right. Print YES if the array contains an element satisfying the criteria and NO if there is no element satisfying the criteria.
// 3
// 1 2 3
// NO
// 4
// 1 2 3 3   ->   1+2 = 3
// YES

let arr = [ 2, 3, 4, 1, 4, 5  ]

function timePass(arr,n){
    let start = 0, end = n-1;
    let sumLeft = arr[start], sumRight = arr[end];
    let flag = false;
    while(start<end){
        if(sumLeft<sumRight){
            start++;
            sumLeft = sumLeft + arr[start]
        }else if(sumLeft>sumRight){
            end--;
            sumRight = sumRight + arr[end];

        }else {
            if(end-start==2){
                flag = true;
                break;
            }
            start++;
            end--;
        }
    }
    return flag;
}

console.log(timePass(arr,arr.length));