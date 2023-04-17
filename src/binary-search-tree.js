const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
  constructor()
  {
      this.rootNode = null;
  }
    
  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if(this.rootNode === null)
        this.rootNode = node;
    else
        this.addNode(this.rootNode, node);
  }
  
  addNode(node, newNode)
  {
    if(newNode.data < node.data)
    {
        if(node.left === null)
            node.left = newNode;
        else
            this.insertNode(node.left, newNode);
    }
    else
    {
        if(node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right, newNode);
    }
  }
  
  insertNode(node, newNode)
  {
    if(newNode.data < node.data)
    {
        if(node.left === null)
            node.left = newNode;
        else
            this.insertNode(node.left, newNode);
    }
    else
    {
        if(node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right, newNode);
    }
  }

  has(value) {
    return this.findHas(this.rootNode, value)
  }
  
  findHas(node, value){
    if(node === null)
        return false;
    else if(value < node.data)
        return this.findHas(node.left, value);
    else if(value > node.data)
        return this.findHas(node.right, value);
    else
        return true; 
  }

  find(value) {
    return this.findNode(this.rootNode, value) 
  }
  
  findNode(node, value){
   if(node === null)
        return null;
    else if(value < node.data)
        return this.findNode(node.left, value);
    else if(value > node.data)
        return this.findNode(node.right, value);
    else
        return node; 
  }
  
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }
  
  removeNode(node, key)
  {
    if(node === null)
        return null;
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
    else
    {
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
        var aux = this.getMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}

  min() {
    return this.getMinNode(this.rootNode).data
  }
  
  max() {
    return this.getMaxNode(this.rootNode).data
  }
  
  getMinNode(node){
    if(node.left === null)
        return node;
    else
        return this.getMinNode(node.left);  
  }
  
  getMaxNode(node){
    if (node.right === null) return node;
      return this.getMaxNode(node.right)  
  }
}

module.exports = {
  BinarySearchTree
};
