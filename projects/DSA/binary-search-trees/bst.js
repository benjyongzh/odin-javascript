import mergeSort from "../recursion/mergeSort.js";

let Node = data => {
    let _data = data;
    let _left;
    let _right;
    return {
        get data() {return _data},
        set data(newData) {_data = newData},
        get left() {return _left},
        set left(newLeft) {_left = newLeft},
        get right() {return _right},
        set right(newRight) {_right = newRight},
    };
};

let Tree = array => {
    let buildTree = array => {
      let newArray = sortAndCull(array);
      // console.log(`newArray is ${newArray}`);
      let root = sortedArrayIntoBST(newArray, 0, newArray.length - 1);
      return root;
    };

    let sortedArrayIntoBST = (array, indexStart, indexEnd) => {
      if (indexStart > indexEnd) return null;
      
      //set middle element of array as root
      let midIndex = parseInt((indexEnd+indexStart) / 2);
      let root = Node(array[midIndex]);

      // console.log("indexStart is " + indexStart, ", midIndex is " +  midIndex, ", indexEnd is " + indexEnd);
      // console.log("root is " + root.data);

      //recursive for left side
      root.left = sortedArrayIntoBST(array, indexStart, midIndex - 1);
      // console.log(root.data + "'s left is " + (root.left ? root.left.data : "null"));

      //recursive for right side
      root.right = sortedArrayIntoBST(array, midIndex + 1, indexEnd);
      // console.log(root.data + "'s right is " + (root.right ? root.right.data : "null"));

      return root;
    };

    let displayPreorder = node => {
      if (node == null) return;

      console.log(node.data);
      displayPreorder(node.left);
      displayPreorder(node.right);
    };

    const prettyPrint = (node = _root, prefix = '', isLeft = true) => {
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      };
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      };
    };

    let _root = buildTree(array);

    return {
      get root() {return _root},
      displayPreorder,
      prettyPrint,
    }
};

let sortAndCull = array => {
  //sort array using mergeSort();
  let sortedArray = mergeSort(array);

  //remove duplicates using Set();
  sortedArray = [...new Set(sortedArray)];

  return sortedArray;
};

let myArray = [6,9,3,7,2,9,11,8,15,12,21,24,15,13,5];
let myTree = Tree(myArray);

// console.log(JSON.stringify(myTree.root));
// myTree.displayPreorder(myTree.root);

// console.log(myTree.prettyPrint());
myTree.prettyPrint(myTree.root);