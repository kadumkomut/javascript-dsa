 class Node {
     constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
     }
 }
 class BinaryTree {
     constructor(value){
         this.root = new Node(value);
         this.count = 0;
     }
     size(){
         return this.count;
     }
     insert(data){
        this.count++;
        const newnode = new Node(data);
        
        const searchTree = node =>{
            if(data<node.data){
                if(!node.left){
                    node.left = newnode;
                }else {
                    searchTree(node.left);
                }
            }
            else if(data>node.data){
                if(!node.right){
                    node.right = newnode;
                }else {
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
     }
     min(){
        let currentNode = this.root;
        while(currentNode.left){
            currentNode = currentNode.left;
        }
        return currentNode.data;
     }
     max(){
        let currentNode = this.root;
        while(currentNode.right){
            currentNode = currentNode.right;
        }
        return currentNode.data;
     }
     contain(value){
        let currentNode = this.root;
        while(currentNode){
            if(value===currentNode.data){
                return true;
            }else if(value<currentNode.data){
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }
        }
        return false;
     }
    //  depth first search
    inOrder(){
        let result = [];
        const traverseInorder = node => {
            if(node.left)
                traverseInorder(node.left);
            result.push(node.data);
            if(node.right)
                traverseInorder(node.right);
            
        }
        traverseInorder(this.root);
        return result;
    }
    preOrder(){
        let result = [];
        const traversePreorder = node => {
            result.push(node.data);
            if(node.left)
            traversePreorder(node.left);
            if(node.right)
            traversePreorder(node.right);
        }
        traversePreorder(this.root);
        return result;
    }
    postOrder(){
        let result = [];
        const traversePostorder = node => {
            if(node.left)
            traversePostorder(node.left);
            if(node.right)
            traversePostorder(node.right);
            result.push(node.data);
        }
        traversePostorder(this.root);
        return result;
    }
    breadFirstSearch(){
        let result = [];
        let queue = [this.root];
        while(queue.length>0){
            let current = queue.shift();
            result.push(current.data);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return result;
    }
 }

 const bst = new BinaryTree(10);
 bst.insert(8);
 bst.insert(1);
 bst.insert(20);
 bst.insert(9)

console.log("preorder = ",bst.preOrder())
console.log("postorder = ",bst.postOrder())
console.log("inorder = ",bst.inOrder())
console.log("breadthFirstSearch = ",bst.breadFirstSearch())

console.log("max = ",bst.max())
console.log("min = ",bst.min())
console.log("size = ",bst.size())