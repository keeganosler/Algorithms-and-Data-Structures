var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    
    this.root = null;
    
    //function to find the minimum value in the BST
    this.findMin = function(){
        if(this.root==null){
            return null;
        }
        let currNode=this.root;
        //traverse left children because we're looking for a lower value
        //stop traversing when we're at the end, i.e., at the lowest value node
        while(currNode.left !== null){
            currNodede=currNode.left;
        }
        return currNode.value;
    }
    
    //function to find the maximum value in the BST
    this.findMax = function(){
        if(this.root==null){
            return null;
        }
        let currNode=this.root;
        //traverse right children because we're looking for a higher value
        //stop traversing when we're at the end, i.e., at the highest value node
        while(currNode.right !== null){
            currNode = currNode.right;
        }
        return currNode.value;
    }
    
    //function to add a node to the BST
    this.add = function(val){
        let rootNode=this.root;
        //create a new node
        if(!rootNode){
            this.root = new Node(val);
            return;
        }
        var currNode = rootNode;
        var newNode = new Node(val)
        while(currNode){
            //move to the left if the current node is greater than the value being inserted
            //break when its been set to the last node
            if(val<currNode.value){
                if(!currNode.left){
                    currNode.left=newNode;
                    break;
                }else{
                    currNode=currNode.left;
                }
            }
            //move to the right if the current node is less than the value being inserted
            //break when its been set to the last node
            else{
                if(!currNode.right){
                    currNode.right=newNode;
                    break;
                }else{
                    currNode=currNode.right;
                }
            }
        }
    }
    
    //function to search for a given element in a bst
    this.isPresent = function(val){
        let currNode=this.root;
        //iterate over the entire bst
        while(currNode!==null){
            //return true if the value is in this node
            if(currNode.value==val){
                return true;
            }
            //move to the left if this node is greater than val
            else if (val<currNode.value){
                currNode=currNode.left;
            }
            //move to the right if this node is less than val
            else{
                currNode=currNode.right;
            }
        }
        //return false if val doesnt exist
        return false;
    }
}