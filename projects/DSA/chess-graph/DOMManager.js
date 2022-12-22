let boardContainer = document.querySelector('.boardContainer');
let currentSelection = [];

function resetBoard(x,y){
    boardContainer.replaceChildren();
    boardContainer.style.gridTemplateColumns = `repeat(${x},1fr)`;
    boardContainer.style.gridTemplateRows = `repeat(${y},1fr)`;
    let booleanColor = true;//true = black, false = white
    let styleColorDark = 'dark-coloured-tile';
    let styleColorLight = 'light-coloured-tile';
    for ( let i = 0; i < y; i++){
        booleanColor = (i%2 != 0);
        for (let j = 0; j < x; j++){
            let color = booleanColor ? styleColorDark : styleColorLight;
            let newTile = createBoardTile('board-tile', j, i, color);
            boardContainer.appendChild(newTile);
            booleanColor = !booleanColor;
        };
    };
};


//DOM elements
function createDiv(className){
    const element = document.createElement('div');
    element.classList.add(className);
    return element;
};

function createBoardTile(className, positionHorizontal, positionVertical, color){
    let element = createDiv(className);
    element.setAttribute('horizontal', positionHorizontal);
    element.setAttribute('vertical', positionVertical);
    element.classList.add(color);
    return element;
};

//DOM related function
function addDOMEventForAllTiles(board, DOMEvent, callback){
    for (let i = 0; i < board.array.length; i++){
        const tile = boardContainer.querySelector(`:nth-child(${i+1})`);
        tile.addEventListener(DOMEvent, callback);
    };
};

function resetTileSelection(){
    currentSelection = [];
    resetTileDisplay();
}

function addTileSelection(tile){
    currentSelection.push(tile);
    if (currentSelection.indexOf(tile) == 0){
        // start Tile
        tile.classList.add('selected-start');
    } else {
        // end Tile
        tile.classList.add('selected-end');
    };
}

function resetTileDisplay(){
    let tiles = boardContainer.querySelectorAll('.board-tile');
    tiles.forEach(tile => {
        tile.classList.remove('highlighted');
        tile.classList.remove('selected-start');
        tile.classList.remove('selected-end');
    });
};

function highlightPath(pathArray){
    for (let i = 1; i < pathArray.length-1; i ++){
        let horizontal = pathArray[i][0];
        let vertical = pathArray[i][1];
        let tile = boardContainer.querySelector(`.board-tile[horizontal='${horizontal}'][vertical='${vertical}']`);
        tile.classList.add('highlighted');
    };
};


export {
    currentSelection,
    resetBoard,
    addDOMEventForAllTiles,
    resetTileSelection,
    addTileSelection,
    highlightPath
}