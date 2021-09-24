const grid = [
    ['w','l','w','w','w'],
    ['w','l','w','w','w'],
    ['w','w','w','l','w'],
    ['w','w','l','l','w'],
    ['l','w','w','l','l'],
    ['l','l','w','w','w'],
]

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            if(explore(grid, r,c,visited)){
                count++;
            }
        }   
    }
    return count;
}

const explore = (grid , r, c,visited) => {

    // we dont want to loop outside of grid
    const rowInBounds = 0<=r&&r<grid.length;
    const columnInBounds = 0<=c&&c<grid.length;
    if(!rowInBounds||!columnInBounds) return false;
    // if we iterating water, ignore
    if(grid[r][c]==='w') return false;
    // if the node is already visited, ignore else add to visited list;
    const pos = r+','+c; 
    if(visited.has(pos)) return false;

    visited.add(pos);

    explore(grid,r-1,c,visited);
    explore(grid,r+1,c,visited);
    explore(grid,r,c-1,visited);
    explore(grid,r,c+1,visited);

    return true;
}

console.log(islandCount(grid));