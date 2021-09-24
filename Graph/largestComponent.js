const graph = {
	0: [8, 1, 5], 
	1: [0],
 	5: [0, 8],
	8: [0,5],
	2: [3,4],
	3: [2, 4],
	4: [3,2] 
}

const largestComponent = (graph) => {
    const visited = new Set();
    let max = 0;
    for(let current in graph) {
        max = Math.max(max,explore(graph, current,visited))
    }
    return max;
}

const explore = (graph,current, visited) => {
    if(visited.has(parseInt(current))) return 0;
    visited.add(parseInt(current));
    let size= 1;
    for(let neigbour of graph[current]){
        size +=explore(graph,neigbour,visited)
    }
    return size;
}

console.log(largestComponent(graph))