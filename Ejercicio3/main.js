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

function sonIdenticos(rootA, rootB) {
  if (rootA === null && rootB === null) {
    return true;
  }

  return (
    rootA.data === rootB.data &&
    sonIdenticos(rootA.left, rootB.left) &&
    sonIdenticos(rootA.right, rootB.right)
  );
}

function copiaArbol(rootOriginal) {
  if (rootOriginal === null) {
    return null;
  }

  const nuevoArbol = new BinarySearchTree();
  nuevoArbol.root = rootOriginal;
  nuevoArbol.left = copiaArbol(rootOriginal.left);
  nuevoArbol.right = copiaArbol(rootOriginal.right);

  return nuevoArbol;
}

function nodoNivel(arbol, nivel){
    if (arbol.root === null) {
        return null;
    } 

    if (nivel === 0) {
        console.log(`Raiz: ${arbol.root}`);
    } else {
        nodoNivel(arbol.left, nivel - 1);
        nodoNivel(arbol.right, nivel - 1);
    }
}

const arbolito = new BinarySearchTree();
arbolito.insertarNodo(10);
arbolito.insertarNodo(2);
arbolito.insertarNodo(15);
arbolito.insertarNodo(6);
arbolito.insertarNodo(8);
arbolito.insertarNodo(4);


