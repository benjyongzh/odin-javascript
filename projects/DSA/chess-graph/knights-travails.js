//factory fn for a chess space
const Vertex = data => {
    let boardPosition = data;
    let _adjacencyList = [];

    return {
        get position() {return boardPosition},
        get adjacencyList() {return _adjacencyList},
        set adjacencyList(newList) {_adjacencyList = newList},
    };
};

// factory fn to create board using X and Y cartesian coordinates
const Board = (horizontal,vertical) => {

    let createBoard = (x, y) => {
        let newBoard = [];
        for ( let i = 0; i < y; i++){
            let row = [];
            for (let j = 0; j < x; j++){
                //push a chess space instead of a simple array
                row.push(Vertex([j,i]));
            };
            newBoard.push(row);
        };
        return newBoard;
    };

    // for each board space, do something
    let forAllVertices = callback => {
        // let array = [];
        _array.forEach(row => {
            // let rowArray = [];
            row.forEach(vertex => {
                // add array and current vertex into argument of callback
                callback({
                    array: _array,
                    vertex: vertex,
                });
                // rowArray.push(vertex.adjacencyList);
            });
            // array.push(JSON.stringify(rowArray));

        });
        // console.log(array);
    };

    let getVertex = (x,y) => {
        // console.log(_array[y][x].position);
        return _array[y][x];
    };

    let _array = createBoard(horizontal,vertical);

    function breadthFirstSearch(vertexStart, vertexTarget){
        let queue = [vertexStart];
        let visited = [vertexStart];

        while (queue.length > 0){
            let vertex = queue.pop();
            if (vertex == vertexTarget){
                visited.push(vertexTarget);
                return visited;
            };

            console.log(vertex.position);

            vertex.adjacencyList.forEach(element => {
                if (!visited.includes(element)){
                    visited.push(element);
                    queue.push(element);
                };
            });
        };

    };

    return {
        get array() {return _array},
        getVertex,
        forAllVertices,
        breadthFirstSearch,
    };
};

// create a list of other spaces are valid from that vertex(adjacenccy list) must be used with bind() to indentify what validity pattern is to be followed
function createAdjacencyList(args){
    let list = [];
    // console.log(this);
    args.array.forEach(row => {
        row.forEach(space => {
            if (this(args.vertex, space)) {
                list.push(space);
            };
        });
    });
    args.vertex.adjacencyList = list;
    // console.log(args.vertex.adjacencyList.length);
};

// function to check for valid move from 1 space to another
function checkValidKnightMove(pointA, pointB){
    let x1 = pointA.position[0];
    let y1 = pointA.position[1];
    let x2 = pointB.position[0];
    let y2 = pointB.position[1];
    
    let distanceX = Math.abs(x2 - x1);
    let distanceY = Math.abs(y2 - y1);
    // console.log(`distanceX is ${distanceX}.`, `distanceY is ${distanceY}.`);

    //check x direction within range (value 1 or 2 only)
    if (distanceX != 2 && distanceX != 1 ) return false;
    //check y direction within range (value 1 or 2 only)
    if (distanceY != 2 && distanceY != 1 ) return false;

    // check for L-shape movements. (1,2) or (2,1) movements only
    if ((distanceX == 2 && distanceY == 1) || 
        (distanceX == 1 && distanceY == 2))
        {
        // console.log("jackpot");
        return true;
    };
    return false;
};



const chessBoard = Board(3,3);
// console.log(JSON.stringify(chessBoard.array));
chessBoard.forAllVertices(createAdjacencyList.bind(checkValidKnightMove));
console.log(chessBoard.breadthFirstSearch(
    chessBoard.getVertex(0,0),
    chessBoard.getVertex(2,0)
    )
);