// Iterative way
const depthFirstPrintIterative = (graph, source) =>{
    const stack = [source];
    while(stack.length>0){
        const current = stack.pop();
        console.log(current);
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
}
// recursive way
const depthFirstPrintRecursive = (graph, source) =>{
    console.log(source);
    for(let neighbour of graph[source]) {
        depthFirstPrintRecursive(graph, neighbour);
    }
}
// only iteratively
const breadthFirstPrint = (graph, source) => {
    const queue =  [source];
    // shift = deque
    // push = enque 
    while(queue.length>0){
        const current = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        } 
    }
} 

const graph = {
    a : ['c', 'b'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [], 
    f : [] 
}; 

// depthFirstPrintRecursive(graph, 'a');
breadthFirstPrint(graph, 'a');