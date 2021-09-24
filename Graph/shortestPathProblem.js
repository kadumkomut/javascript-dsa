const edges = [
  ['w','x'],
  ['x','y'],
  ['z','y'],
  ['z','v'],
  ['w','v']  
]

const buildGraph = (edges) =>{
    const graph = {}

    for(let edge of edges){
        const [a,b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const shortestPath = (edges, start, end) => {
    const graph = buildGraph(edges);
    const queue = [[start, 0]];
    const visited = new Set([start]);
    while(queue.length>0){
        const [node, distance] = queue.shift();
        // if the end is found, just return the distance;
        if(node===end){
            return distance;
        }

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor,distance+1]);
            }
        }
    }
    return -1;
}

console.log(shortestPath(edges,'w', 'z')); 