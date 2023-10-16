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

  get getRoot() {
    return this.root;
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

function nodoNivel(arbol, nivel) {
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

function numeroHojas(arbol) {
  if (arbol=== null) {
    return null;
  }

  if (arbol.left === null && arbol.right === null) {
    return 1;
  }

  const HojasIzq = numeroHojas(arbol.left);
  const HojasDerec = numeroHojas(arbol.right);

  return HojasDerec + HojasIzq;
}

const arbolA = new BinarySearchTree();
arbolA.insertarNodo(10);
arbolA.insertarNodo(2);
arbolA.insertarNodo(15);
arbolA.insertarNodo(6);
arbolA.insertarNodo(8);
arbolA.insertarNodo(4);

console.log(`Numero de Hojas: ${numeroHojas(arbolA.getRoot)}`);
