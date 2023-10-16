class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  toString() {
    return `${this.data}`;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertarNodo(nodo) {
    const node = new TreeNode(nodo);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let tmp = this.root;

    while (true) {
      if (nodo === tmp.data) {
        break;
      }

      if (nodo < tmp.data) {
        if (tmp.left === null) {
          tmp.left = node;
          break;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = node;
          break;
        }
        tmp = tmp.right;
      }
    }
  }

  buscarNodo(nodo) {
    if (this.root === null) {
      return false;
    }

    let tmp = this.root;

    while (tmp !== null) {
      if (tmp.data === nodo) {
        return tmp;
      }

      if (nodo < tmp.data) {
        tmp = tmp.left;
      } else {
        tmp = tmp.right;
      }
    }

    return false;
  }

  recorridoInOrder(nodo) {
    if (nodo === undefined) {
      nodo = this.root;
    }

    if (nodo !== null) {
      this.recorridoInOrder(nodo.left);

      console.log(nodo.toString());

      this.recorridoInOrder(nodo.right);
    }
  }
}

function sonIdenticos(rootA, rootB){
    if (rootA === null && rootB === null) {
        return true;
    }

    return (rootA.data === rootB.data) && (sonIdenticos(rootA.left, rootB.left) && sonIdenticos(rootA.right, rootB.right)); 
}

const arbolA = new BinarySearchTree();
arbolA.insertarNodo(10);
arbolA.insertarNodo(2);
arbolA.insertarNodo(15);
arbolA.insertarNodo(6);
arbolA.insertarNodo(8);
arbolA.insertarNodo(4);

const arbolB = new BinarySearchTree();
arbolB.insertarNodo(10);
arbolB.insertarNodo(2);
arbolB.insertarNodo(15);
arbolB.insertarNodo(6);
arbolB.insertarNodo(8);
arbolB.insertarNodo(4);


//comparando arboles

let parentesco = sonIdenticos(arbolA.root, arbolB.root);
console.log(`¿Existe paranteso?: ${parentesco}`);