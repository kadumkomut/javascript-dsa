function nPerson(n){
    if(n<=2) return n;
    return nPerson(n-1) + ((n-1)*nPerson(n-2));
}

function pow(a,b){
    if(b==0) return 1;
    if(b==1) return a;
    let temp = pow(a,Math.floor(b/2));
    if(b%2==0) return temp * temp;
    else return a * temp * temp;
}

function pattern(n){
    if(n===1){
        console.log('*');
        return;
    }
}

function subsets(arr,i,osf,result){
    if(i===arr.length){
        result.push(osf);
        return;
    }
    subsets(arr,i+1,osf + arr[i],result);
    subsets(arr,i+1,osf,result);
    return result;
}

function checkSorted(arr,n){
    if (n == 1 || n == 0)
        return 1;
 
    if (arr[n - 1] < arr[n - 2])
        return 0;
 
    return checkSorted(arr, n - 1);
}

function possibleDirection(n,m,currentRow,currentCol,out){
    if(currentRow==n-1&&currentCol==m-1){
        console.log(out);
        return;
    }
    if(currentRow>=n||currentCol>=m){
        return;
    }
    possibleDirection(n,m,currentRow+1,currentCol,out + "Down-");
    possibleDirection(n,m,currentRow,currentCol+1,out + "Right-");
    possibleDirection(n,m,currentRow+1,currentCol+1,out + "Diagonally-");
}

function stairCase(i,n,osf){
    if(i>=n) return;
    if(i==n-1){
        console.log(osf);
        return;
    }
    for(let j=1;j<=6;j++){
        stairCase(i+j,n,osf + "->" + j);
    }
}

function lexicographicOrder(n,i,result){
    if(i>n) return;
    result.push(i);
    for(let j=(i==0?1:0);j<=9;j++){
        lexicographicOrder(n,i*10 + j,result); 
    }
    return result;
}

function permutation(str,osf){
    if(str===""){
        console.log(osf);
        return;
    }
    let set = new Set();
    for(let i=0;i<str.length;i++){
        if(!set.has(str.charAt(i))){
            permutation(str.substring(0,i)+str.substring(i+1),osf + str.charAt(i));
            set.add(str.charAt(i));
        }
    }
}

function permutation1(str,osf,i){
    if(i>str.length-1){
        console.log(osf);
        return;
    }
    for(let j=i;j<str.length;j++){
        [str[j],str[i]] = [str[i],str[j]];
        permutation1([...str],osf+","+str[i],i+1);
        [str[j],str[i]] = [str[i],str[j]];
    }
}
// console.log(nPerson(10))
// console.log(pow(2,102))
// console.log(pattern(4))
// console.log(subsets([1,2,3],0,"",[])) 
// console.log(checkSorted([1,2,3,1],4))
// possibleDirection(3,3,0,0,"")
// stairCase(0,4,"")
// console.log(lexicographicOrder(21,0,[]));
// permutation("AACC","");
// permutation1(["A","B","C"],"",0)