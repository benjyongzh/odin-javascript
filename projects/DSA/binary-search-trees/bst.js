let Node = (data) => {
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
    let _root = buildTree(array);

    let buildTree = array => {
        //sort array using mergeSort();
        let sortedArray = 
        //remove duplicates using Set();

        // let root = Node(array[0]);



        return root;
    };

    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    return {
        get root() {return _root},
        set root(newRoot) {_root = newRoot},
        buildTree,
        prettyPrint,
    }
};