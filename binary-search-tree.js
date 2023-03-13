class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //if the tree is empty, insert at the root
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //otherwise, find the correct spot to insert
    let current = this.root;
    while(current){
      if (val < current.val) {
        if (!current.left){
          current.left = newNode;
          return this;
        }else{
          current = current.left;
        }
      }else if(val > current.val){
        if (!current.right){
          current.right = newNode;
          return this;
        }else{
          current = current.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    const newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    if (val < current.val) {
      if(!current.left){
        current.left = newNode;
        return this;
      }
      return this.insertRecursively(val, current.left);
    }else {
      if(!current.right){
        current.right = newNode;
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return undefined;
    let current = this.root;
    while(current){
      if (val < current.val) {
          current = current.left;
      }else if (val > current.val){
          current = current.right;
      }
      else if (val === current.val) return current;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(!current) return undefined;
    if(val < current.val){
      if (!current.left) return undefined;
      return this.findRecursively(val, current.left)
    }else if(val > current.val){
      if (!current.right) return undefined;
      return this.findRecursively(val, current.right)
    }else if (val === current.val) {
      return current;
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedVal = [];
    let current = this.root;
    function traverse(node){
      visitedVal.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedVal;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedVal = [];
    let current = this.root;
    function traverse(node){
      if (node.left) traverse(node.left);
      visitedVal.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedVal;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedVal = [];
    let current = this.root;
    function traverse(node){
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedVal.push(node.val);
    }
    traverse(current);
    return visitedVal;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [];
    let visitedVal = [];
    let current = this.root;
    
    queue.push(current);

    while(queue.length){
      current = queue.shift();
      visitedVal.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return visitedVal;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
