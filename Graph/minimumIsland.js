const grid = [
    ['w', 'l', 'w', 'w', 'l', 'w'],
    ['l', 'l', 'w', 'w', 'l', 'w'],
    ['w', 'l', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l', 'w'],
    ['w', 'w', 'w', 'l', 'w', 'w'],
]

const minimumIsland = (grid) => {
    let min = Infinity;
    const visited = new Set();
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            const size = explore(grid,r,c,visited);
            if(size>0&&size<min){
                min = size;
            }
        }
    }
    return min;
}

const explore = (grid,r,c,visited) =>{
    const rowInBounds = 0<=r&&r<grid.length;
    const colInBounds = 0<=c&&c<grid.length;
    if(!colInBounds||!rowInBounds) return 0;
    
    if(grid[r][c]==='w') return 0;

    const pos = r+','+c;
    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;
    size+=explore(grid,r-1,c,visited);
    size+=explore(grid,r+1,c,visited);
    size+=explore(grid,r,c-1,visited);
    size+=explore(grid,r,c+1,visited);
    return size;
}

console.log(minimumIsland(grid))