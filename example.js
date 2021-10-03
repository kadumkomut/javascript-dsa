class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(data){
        this.head = new Node(data);
    }
}
