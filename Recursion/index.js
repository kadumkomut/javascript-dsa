const RecursiveSum = (n) =>{
    if(n===1){
        return 1;
    }else {
        return RecursiveSum(n-1)+n;
    }
}

console.log(RecursiveSum(5))