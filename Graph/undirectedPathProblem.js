const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, source, destination,visited) => {
    if(source===destination) return true;
    if(visited.has(source)) return false
    visited.add(source);
    for(let neighbor of graph[source]){
        if(hasPath(graph, neighbor, destination,visited)===true) return true; 
    }     
    return false;
}

const edges = [  
    ['i', 'j'],
    ['k', 'i'],
    ['j', 'k'],
    ['m','k'],
    ['k', 'l'],
    ['o', 'n']
]

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges){
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const result = undirectedPath(edges, 'o','i');
console.log(result)