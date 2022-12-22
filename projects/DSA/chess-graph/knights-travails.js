import * as DOM from "./DOMManager.js";

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
            for (let j = 0; j < x; j++){
                //push a chess space instead of a simple array
                newBoard.push(Vertex([j,i]));
            };
        };
        DOM.resetBoard(x,y);
        return newBoard;
    };

    // for each board space, do something
    let forAllVertices = callback => {
        for (let i = 0; i < _array.length; i++){
            callback({
                array: _array,
                vertex: _array[i],
            });
        };
    };

    let getVertex = (x,y) => {
        for (let i = 0; i < _array.length; i++){
            if (_array[i].position[0] == x && _array[i].position[1] == y){
                // console.log(_array[i].position);
                return _array[i];
            };
        };
        return null;
    };

    let _array = createBoard(horizontal,vertical);

    function breadthFirstSearch(vertexStart, vertexTarget){
        let queue = [vertexStart];
        let visited = [vertexStart];
        let prev = _array.map(element => { return null});

        // setting up prev array
        while (queue.length > 0){
            let vertex = queue.pop();

            for (let i = 0; i < vertex.adjacencyList.length; i++){                
                if (!visited.includes(vertex.adjacencyList[i])){
                    visited.push(vertex.adjacencyList[i]);
                    queue.unshift(vertex.adjacencyList[i]);
                    prev[_array.indexOf(vertex.adjacencyList[i])] = vertex;
                };
            }
        };
        /* let prevPositions = prev.map(element => {
            if (element != null) {return element.position}
            else return null;
        });
        console.log(prevPositions); */
        
        //reconstruct path in reverse using prev array. start from vertexTarget
        let arrayActualVertex = vertexTarget;
        let currentIndex = _array.indexOf(arrayActualVertex);
        // console.log(currentIndex);
        let path = [arrayActualVertex];
        while (currentIndex != -1 && arrayActualVertex != vertexStart){
            arrayActualVertex = prev[currentIndex];
            // console.log(arrayActualVertex.position);
            path.push(arrayActualVertex);
            // currentIndex = prev.indexOf(arrayActualVertex);
            currentIndex = _array.indexOf(arrayActualVertex);
            // console.log(currentIndex);
        };

        let pathPositions = path.reverse().map(element => element.position);

        return pathPositions;

    };


    return {
        get array() {return _array},
        get arrayPositions() {
            return _array.map(vertex => {
                return vertex.position
            });
        },
        getVertex,
        forAllVertices,
        breadthFirstSearch,
    };
};

// create a list of other spaces are valid from that vertex(adjacenccy list) must be used with bind() to indentify what validity pattern is to be followed
function createAdjacencyList(args){
    let list = [];
    // console.log(this);
    args.array.forEach(space => {
        if (this(args.vertex, space)) {
            list.push(space);
        };
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

// DOM events
function tileClicked(event){

    // let horizontalPos = event.target.getAttribute("horizontal");
    // let verticalPos = event.target.getAttribute("vertical");
    // console.log(`horizontal is ${horizontalPos}`, `vertical is ${verticalPos}`);
    if (DOM.currentSelection.length >= 2){        
        //reset display
        DOM.resetTileSelection();
    };

    //add selection
    DOM.addTileSelection(event.target);

    //solve
    if (DOM.currentSelection.length >= 2){
        //give solution
        let tiles = DOM.currentSelection
        .map(DOMelement => {
            return [DOMelement.getAttribute("horizontal"), DOMelement.getAttribute("vertical")]
        })
        .map(positionArrays => {
            return this.getVertex(positionArrays[0], positionArrays[1]);
        });
        
        const path = this.breadthFirstSearch(tiles[0], tiles[1]);

        //display solution
        DOM.highlightPath(path);
    };
};


let currentQuery = [];

// ====== initialize chessboard ===================================
const chessBoard = Board(4,4);
chessBoard.forAllVertices(createAdjacencyList.bind(checkValidKnightMove));

// ====== initialize DOM ===================================
DOM.addDOMEventForAllTiles(chessBoard, 'click', tileClicked.bind(chessBoard));