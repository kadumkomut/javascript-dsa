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

function permutation1(str,i){
    if(i>str.length-1){
        console.log(str);
        return;
    }
    for(let j=i;j<str.length;j++){
        [str[j],str[i]] = [str[i],str[j]];
        permutation1(str,i+1);
        [str[j],str[i]] = [str[i],str[j]];
    }
}

// backtracking
function isItSafe(i,j,n,visited){
    return (i>=0&&j>=0&&i<n&&j<n&&!visited.has(i+"-"+j));
}
function ratInAMaze(i,j,n,grid,visited,osf){
    if(i==n-1&&j==n-1){
        console.log(osf);
        return;
    }

    if(!isItSafe(i,j,n,visited)){
        // pruning
        return;
    }
    visited.set(i+"-"+j,true)
    if(i+1<n&&grid[i+1][j]==0){
        ratInAMaze(i+1,j,n,grid,visited,osf + "D");
    }
    if(i-1>=0&&grid[i-1][j]==0){
        ratInAMaze(i-1,j,n,grid,visited,osf + "U");
    }
    if(j+1<n&&grid[i][j+1]==0){
        ratInAMaze(i,j+1,n,grid,visited,osf + "R");
    }
    if(j-1>=0&&grid[i][j-1]==0){
        ratInAMaze(i,j-1,n,grid,visited,osf + "L");
    }
    osf = osf.slice(0,osf.length-1);
    visited.delete(i+"-"+j);
    return;
}

function subsetBacktracking(i,arr,res){
    if(i==arr.length){
        console.log(res);
        return;
    }
    res.push(arr[i]);
    subsetBacktracking(i+1,arr,res);
    res.pop();
    subsetBacktracking(i+1,arr,res);
}
function isItSafeToPlaceQueen(grid, row, col, n){
    // column check
    for(let i=row-1;i>=0;i--){
        if(grid[i][col]) return false;
    }
    // left upper diagonal check
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(grid[i][j]) return false;
    }
    // right upper diagonal check
    for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++){
        if(grid[i][j]) return false;
    }
    return true;
}
function display(grid,n){
    let temp = [];
    for(let i=0;i<n;i++){
        let p = []
        for(let j=0;j<n;j++){
            if(grid[i][j]){
                p.push("Q")
            }else{
                p.push('')
            }
        }
        temp.push(p);
    }
    console.log(temp)
}
function NQueen(grid, curRow, n){
    if(curRow==n){
        let temp = [];
        for(let i=0;i<n;i++){
            temp.push(grid[i].join(''));
        }
        console.log(temp)
        return;
    }
    for(let i=0;i<n;i++){
        if(isItSafeToPlaceQueen(grid,curRow,i,n)){
            grid[curRow][i] = true;
            NQueen(grid,curRow+1,n);
            grid[curRow][i] = false;
        }
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
// permutation1(["A","B","C"],0)
// let maze = [
//     [0,0,1,0,0,1,0],
//     [1,0,1,1,0,0,0],
//     [0,0,0,0,1,0,1],
//     [1,0,1,0,0,0,0],
//     [1,0,1,1,0,1,0],
//     [1,0,0,0,0,1,0],
//     [1,1,1,1,0,0,0]
// ]
// let visited = new Map();
// ratInAMaze(0,0,maze.length,maze,visited,"");
// subsetBacktracking(0,[1,2,3],[])
function createGrid(n){
    let grid = [];
    for(let i=0;i<n;i++){
        let temp = [];
        for(let j=0;j<n;j++){
            temp.push(false);
        }
        grid.push([...temp]);
    }
    return grid;
}
let n = 4;
let grid = createGrid(n);
console.log(grid);
NQueen(grid, 0, n); 