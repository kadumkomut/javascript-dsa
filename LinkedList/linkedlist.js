class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++;
    }
    insertAtIndex(data, index){
        if(index>this.size||index<0){
            console.log('Cannot insert at specified index');
            return;
        }
        if(index===0){
            this.insertFirst(data);
            return;
        }
        const node = new Node(data);
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        node.next = current.next;
        current.next = node; 

        this.size++;
    }
    insertLast(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node; 
        }else {
            let cur = this.head;
            while(cur.next){
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }
    getAtIndex(index){
        if(index>this.size||index<0){
            console.log('Cannot insert at specified index');
            return;
        }
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        console.log(current.val);
    }
    printList(){
        let cur = this.head;
        while(cur){
            console.log(cur.val);
            cur = cur.next
        }
        console.log(this.size)
    }
}

const list = new LinkedList();
list.insertFirst(23);
list.insertLast(26);
list.insertLast(21);
list.insertAtIndex(50,3);
list.printList();
list.getAtIndex(1)
