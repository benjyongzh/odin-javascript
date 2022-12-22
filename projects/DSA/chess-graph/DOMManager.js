let boardContainer = document.querySelector('.boardContainer');

function resetBoard(x,y){
    boardContainer.replaceChildren();
    boardContainer.style.gridTemplateColumns = `repeat(${x},1fr)`;
    boardContainer.style.gridTemplateRows = `repeat(${y},1fr)`;
    let booleanColor = true;//true = black, false = white
    let styleColorDark = 'rgb(' + 50 + ',' + 50 + ',' + 50 + ')';
    let styleColorLight = 'rgb(' + 200 + ',' + 200 + ',' + 200 + ')';
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
    element.style.backgroundColor = color;
    return element;
};

//DOM related function
function addDOMEventForAllTiles(board, DOMEvent, callback){
    for (let i = 0; i < board.array.length; i++){
        const tile = boardContainer.querySelector(`:nth-child(${i+1})`);
        tile.addEventListener(DOMEvent, callback);
    };
};


export {
    resetBoard,
    addDOMEventForAllTiles
}