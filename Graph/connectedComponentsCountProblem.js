const graph = {
	3: [],
	4: [6],
	6: [4, 5, 7, 8],
	8: [6],
	7: [6], 
	5: [6],
	1: [2], 
	2: [1]
}

const connectedComponentCount = (graph) => { 
    let count = 0;
    const visited = new Set();
    for(let node in graph){
        if(explore(graph, node,visited)) count++;
    }
    return count;
}

const explore = (graph, current,visited) => {
    if(visited.has(parseInt(current))) return false;
    visited.add(parseInt(current));
    for(let neighbour of graph[current]){
        explore(graph,neighbour,visited);
    }

    return true;
}

const result = connectedComponentCount(graph);
console.log(result);
