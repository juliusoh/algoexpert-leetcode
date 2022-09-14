class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      console.log(array)
      array.push(this.name);
          console.log(array, 'array')
      for (const child of this.children) {
        child.depthFirstSearch(array);
              console.log(child, 'child')
      }
          console.log('return', array)
      return array;
    }
  }

const fuckYou = new Node("A");
const children1 = ["B","C","D"]
children1.forEach(child => {
    fuckYou.addChild(child)
})



console.log(fuckYou)

