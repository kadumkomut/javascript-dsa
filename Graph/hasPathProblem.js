const hasPathDepth = (graph, source, destination) => {
    if(source===destination) return true;
    for(let neighbour of graph[source]){
        if(hasPath(graph, neighbour, destination)===true) return true;
    }
    return false;   
}

const hasPathBreadth = (graph, source, destination) => {
    const queue = [source]
    while(queue.length>0){
        const current = queue.shift();
        if(current===destination) return true;
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return false;   
}

const graph = {
    f: ['g', 'i' ],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: [ 'i' ],
    k: []
}

console.log(hasPathBreadth(graph,'h', 'f'))
